package com.alimun.app

import android.content.Intent
import android.net.Uri
import io.flutter.embedding.android.FlutterActivity
import io.flutter.embedding.engine.FlutterEngine
import io.flutter.plugin.common.MethodChannel

/**
 * The Alimun app (docs/NATIVE_APP_PLAN.md). The screens are drawn by the app itself (Flutter, native/lib).
 * Channel "alimun/phone": open({ url }) shows a page of alimun.com (terms, privacy) in the phone's browser.
 */
class MainActivity : FlutterActivity() {
    override fun configureFlutterEngine(flutterEngine: FlutterEngine) {
        super.configureFlutterEngine(flutterEngine)
        MethodChannel(flutterEngine.dartExecutor.binaryMessenger, "alimun/phone").setMethodCallHandler { call, result ->
            if (call.method == "open") {
                val url = call.argument<String>("url") ?: ""
                if (url.startsWith("https://alimun.com/")) {
                    try {
                        startActivity(Intent(Intent.ACTION_VIEW, Uri.parse(url)).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK))
                        result.success(true)
                    } catch (e: Exception) {
                        result.success(false)
                    }
                } else result.success(false)
            } else result.notImplemented()
        }
    }
}
