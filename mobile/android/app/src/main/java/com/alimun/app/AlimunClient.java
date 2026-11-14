package com.alimun.app;

import android.content.Context;
import android.content.Intent;
import android.content.res.AssetManager;
import android.net.ConnectivityManager;
import android.net.Network;
import android.net.NetworkCapabilities;
import android.net.Uri;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;
import com.getcapacitor.Bridge;
import com.getcapacitor.BridgeWebViewClient;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.RandomAccessFile;
import java.io.ByteArrayInputStream;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

/**
 * Where each request of the app is answered from (docs/APP_PLAN.md, step 3):
 * - https://alimun.com/app and the app's own files (mobile/www, packaged in the app by mobile/build-www.js): from the
 *   app, through Capacitor, which adds its bridge to the page. The app opens without a connection, even the first time.
 * - The Supabase library from its CDN: the packaged copy (same version and integrity).
 * - Downloaded course files (https://alimun.com/data/...): from the app's storage (files/offline/data/...) when the
 *   phone is offline; from the network otherwise, so they stay up to date.
 * - Downloaded recordings (Supabase Storage course-audio): always from the app's storage once downloaded, with byte
 *   ranges for the audio player.
 * - Everything else the page asks for (/api, the database, payments): the network.
 * - No other page is ever shown in the app: see shouldOverrideUrlLoading.
 * The page writes the downloads with the Filesystem plugin (js/app/device.js), under Directory.Data/offline.
 */
public class AlimunClient extends BridgeWebViewClient {
    private static final String HOST = "alimun.com";
    private static final String AUDIO = "/storage/v1/object/public/course-audio/";
    private final Context context;
    private final Set<String> packaged = new HashSet<>();
    private String supabaseUrl = "";

    public AlimunClient(Bridge bridge) {
        super(bridge);
        this.context = bridge.getContext();
        AssetManager am = context.getAssets();
        list(am, "public", "");
        try (InputStream in = am.open("public/vendor/supabase.url")) {
            supabaseUrl = new String(readAll(in), StandardCharsets.UTF_8).trim();
        } catch (IOException e) {
            supabaseUrl = "";
        }
    }

    private void list(AssetManager am, String dir, String rel) {
        try {
            String[] names = am.list(dir);
            if (names == null) return;
            for (String n : names) {
                String child = dir + "/" + n, childRel = rel.isEmpty() ? n : rel + "/" + n;
                String[] sub = am.list(child);
                if (sub != null && sub.length > 0) list(am, child, childRel);
                else packaged.add(childRel);
            }
        } catch (IOException e) {
            // nothing packaged under this folder
        }
    }

    /**
     * The app only ever shows itself (owner, 14 Nov 2026: "an app 100% on the phone"). Any other page a tap would open,
     * a page of the website included, opens in the phone's browser (or mail, or phone) instead, never inside the app.
     */
    @Override
    public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
        if (!request.isForMainFrame()) return false;
        Uri u = request.getUrl();
        String scheme = u.getScheme() == null ? "" : u.getScheme();
        String path = u.getPath() == null ? "/" : u.getPath();
        if ("https".equals(scheme) && HOST.equalsIgnoreCase(u.getHost()) && isApp(path)) return false;
        if ("https".equals(scheme) || "mailto".equals(scheme) || "tel".equals(scheme)) {
            try {
                Intent open = new Intent(Intent.ACTION_VIEW, u);
                open.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                context.startActivity(open);
            } catch (Exception e) {
                // nothing on the phone opens it
            }
        }
        return true;
    }

    private static boolean isApp(String path) {
        return path.equals("/") || path.equals("/app") || path.equals("/app/") || path.equals("/app/index.html");
    }

    @Override
    public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
        Uri u = request.getUrl();
        String host = u.getHost() == null ? "" : u.getHost();
        String path = u.getPath() == null ? "/" : u.getPath();
        boolean get = "GET".equalsIgnoreCase(request.getMethod());

        if (get && !supabaseUrl.isEmpty() && supabaseUrl.equals(u.toString())) {
            return asset("public/vendor/supabase.js", "application/javascript", true);
        }
        if (HOST.equalsIgnoreCase(host)) {
            if (!get) return null;
            if (isApp(path)) {
                return super.shouldInterceptRequest(view, request);
            }
            String rel = path.substring(1);
            if (packaged.contains(rel) && !rel.equals("index.html")) return super.shouldInterceptRequest(view, request);
            if (path.startsWith("/data/")) {
                File f = offline("data/" + path.substring(6));
                if (f != null && f.isFile() && !online()) return file(f, "application/json", request, false);
            }
            return null;
        }
        if (get && host.endsWith(".supabase.co") && path.startsWith(AUDIO)) {
            File f = offline("audio/" + path.substring(AUDIO.length()));
            if (f != null && f.isFile() && (path.endsWith(".mp3") || !online())) {
                return file(f, path.endsWith(".mp3") ? "audio/mpeg" : "application/json", request, true);
            }
            return null;
        }
        return super.shouldInterceptRequest(view, request);
    }

    /** A file under files/offline, or null for a path that tries to leave it */
    private File offline(String rel) {
        if (rel.contains("..")) return null;
        return new File(new File(context.getFilesDir(), "offline"), rel);
    }

    private boolean online() {
        try {
            ConnectivityManager cm = (ConnectivityManager) context.getSystemService(Context.CONNECTIVITY_SERVICE);
            Network n = cm.getActiveNetwork();
            NetworkCapabilities c = n == null ? null : cm.getNetworkCapabilities(n);
            return c != null && c.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET) && c.hasCapability(NetworkCapabilities.NET_CAPABILITY_VALIDATED);
        } catch (Exception e) {
            return true;
        }
    }

    private WebResourceResponse asset(String name, String mime, boolean cors) {
        try {
            Map<String, String> h = new HashMap<>();
            if (cors) h.put("Access-Control-Allow-Origin", "*");
            return new WebResourceResponse(mime, "utf-8", 200, "OK", h, context.getAssets().open(name));
        } catch (IOException e) {
            return null;
        }
    }

    /** A downloaded file, with byte ranges (audio players ask for them) */
    private WebResourceResponse file(File f, String mime, WebResourceRequest request, boolean cors) {
        try {
            long size = f.length();
            Map<String, String> h = new HashMap<>();
            h.put("Accept-Ranges", "bytes");
            h.put("Cache-Control", "no-store");
            if (cors) h.put("Access-Control-Allow-Origin", "*");
            String range = null;
            Map<String, String> rh = request.getRequestHeaders();
            if (rh != null) for (Map.Entry<String, String> e : rh.entrySet()) if ("range".equalsIgnoreCase(e.getKey())) range = e.getValue();
            if (range != null && range.startsWith("bytes=")) {
                String[] p = range.substring(6).split("-", -1);
                long start, end;
                if (p[0].isEmpty()) { start = Math.max(0, size - Long.parseLong(p[1])); end = size - 1; }
                else { start = Long.parseLong(p[0]); end = p.length > 1 && !p[1].isEmpty() ? Math.min(Long.parseLong(p[1]), size - 1) : size - 1; }
                if (start >= size || start > end) {
                    h.put("Content-Range", "bytes */" + size);
                    return new WebResourceResponse(mime, null, 416, "Range Not Satisfiable", h, new ByteArrayInputStream(new byte[0]));
                }
                byte[] buf = new byte[(int) (end - start + 1)];
                try (RandomAccessFile raf = new RandomAccessFile(f, "r")) { raf.seek(start); raf.readFully(buf); }
                h.put("Content-Range", "bytes " + start + "-" + end + "/" + size);
                h.put("Content-Length", String.valueOf(buf.length));
                return new WebResourceResponse(mime, null, 206, "Partial Content", h, new ByteArrayInputStream(buf));
            }
            h.put("Content-Length", String.valueOf(size));
            return new WebResourceResponse(mime, null, 200, "OK", h, new FileInputStream(f));
        } catch (Exception e) {
            return null;
        }
    }

    private static byte[] readAll(InputStream in) throws IOException {
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        byte[] b = new byte[8192];
        int n;
        while ((n = in.read(b)) > 0) out.write(b, 0, n);
        return out.toByteArray();
    }
}
