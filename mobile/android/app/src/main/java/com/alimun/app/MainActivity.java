package com.alimun.app;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.os.Bundle;
import android.os.SystemClock;
import android.view.View;
import android.webkit.WebView;
import androidx.core.splashscreen.SplashScreen;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import com.getcapacitor.BridgeActivity;

/**
 * The Alimun app (docs/APP_PLAN.md, step 3). Capacitor shows the learners' app at https://alimun.com/app; AlimunClient
 * decides, for every request, whether it is answered from the app itself (its packaged files and the downloads in its
 * own storage) or from the network. The page sits inside the status and navigation bars, which are white with dark
 * icons, and does not stretch at the ends of a scroll.
 *
 * The launch screen (the logo on white) stays until the page says its first screen is drawn (AlimunPhone.ready, or
 * four seconds at most), then fades, so there is no blank moment between the logo and the app.
 */
public class MainActivity extends BridgeActivity {
    static volatile boolean ready = false;
    private static final long LAUNCH_MAX_MS = 4000;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        ready = false;
        final long started = SystemClock.uptimeMillis();
        SplashScreen splash = SplashScreen.installSplashScreen(this);
        splash.setKeepOnScreenCondition(() -> !ready && SystemClock.uptimeMillis() - started < LAUNCH_MAX_MS);
        splash.setOnExitAnimationListener(provider -> {
            final View v = provider.getView();
            v.animate().alpha(0f).setDuration(220).setListener(new AnimatorListenerAdapter() {
                @Override public void onAnimationEnd(Animator animation) { provider.remove(); }
            }).start();
        });
        registerPlugin(AlimunPhone.class);
        super.onCreate(savedInstanceState);
        bridge.setWebViewClient(new AlimunClient(bridge));
        WebView web = bridge.getWebView();
        web.setOverScrollMode(View.OVER_SCROLL_NEVER);
        web.setBackgroundColor(0xFFFFFFFF);
        getWindow().getDecorView().setBackgroundColor(0xFFFFFFFF);
        WindowInsetsControllerCompat bars = WindowCompat.getInsetsController(getWindow(), getWindow().getDecorView());
        bars.setAppearanceLightStatusBars(true);
        bars.setAppearanceLightNavigationBars(true);
    }
}
