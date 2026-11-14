package com.alimun.app;

import android.view.WindowManager;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/**
 * Small phone features the page asks for (js/app/native.js, docs/APP_PLAN.md "The complete app", step 1):
 * ready(): the first screen is drawn, so the launch screen can fade away;
 * keepAwake({ on }): the screen does not dim or lock during a lesson, a test, a live class or a tutor call.
 */
@CapacitorPlugin(name = "AlimunPhone")
public class AlimunPhone extends Plugin {
    @PluginMethod
    public void ready(PluginCall call) {
        MainActivity.ready = true;
        call.resolve();
    }

    @PluginMethod
    public void keepAwake(PluginCall call) {
        final boolean on = Boolean.TRUE.equals(call.getBoolean("on", false));
        getActivity().runOnUiThread(() -> {
            if (on) getActivity().getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
            else getActivity().getWindow().clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        });
        JSObject res = new JSObject();
        res.put("on", on);
        call.resolve(res);
    }
}
