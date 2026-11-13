package com.alimun.app;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

/**
 * The Alimun app (docs/APP_PLAN.md, step 3). Capacitor shows the learners' app at https://alimun.com/app; AlimunClient
 * decides, for every request, whether it is answered from the app itself (its packaged files and the downloads in its
 * own storage) or from the network.
 */
public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        bridge.setWebViewClient(new AlimunClient(bridge));
    }
}
