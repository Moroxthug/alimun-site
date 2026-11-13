package com.alimun.app;

import android.os.Bundle;
import android.view.View;
import android.webkit.WebView;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import com.getcapacitor.BridgeActivity;

/**
 * The Alimun app (docs/APP_PLAN.md, step 3). Capacitor shows the learners' app at https://alimun.com/app; AlimunClient
 * decides, for every request, whether it is answered from the app itself (its packaged files and the downloads in its
 * own storage) or from the network. The page sits inside the status and navigation bars, which are white with dark
 * icons, and does not stretch at the ends of a scroll.
 */
public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
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
