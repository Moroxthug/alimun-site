package com.alimun.admin;

import android.os.Bundle;
import android.view.View;
import android.webkit.WebView;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import com.getcapacitor.BridgeActivity;

/**
 * Alimun Admin (docs/APP_PLAN.md): the admin pages at https://alimun.com/app/admin, always fresh from the site, with
 * the microphone and camera for classes and the tutor (Capacitor asks Android when a page first needs them).
 * Installed by hand on the owner's devices; never published.
 */
public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        WebView web = bridge.getWebView();
        web.setOverScrollMode(View.OVER_SCROLL_NEVER);
        web.setBackgroundColor(0xFFFFFFFF);
        getWindow().getDecorView().setBackgroundColor(0xFFFFFFFF);
        WindowInsetsControllerCompat bars = WindowCompat.getInsetsController(getWindow(), getWindow().getDecorView());
        bars.setAppearanceLightStatusBars(true);
        bars.setAppearanceLightNavigationBars(true);
    }
}
