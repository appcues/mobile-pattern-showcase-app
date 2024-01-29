package com.appcuescustompreviewer

import android.content.Intent
import android.net.Uri
import com.appcues.Appcues
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class AppcuesCustomPreviewerModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return "AppcuesCustomPreviewer"
  }

  @ReactMethod
  fun preview(accountID: String, applicationID: String, experienceID: String, localeID: String?, promise: Promise) {
    val context = reactApplicationContextIfActiveOrWarn
    if (context == null) {
      promise.reject("Preview Failure", "Unable to initialize the SDK, no Application Context found")
      return
    }

    val previewInstance = Appcues(context, accountID, applicationID)

    val activity = currentActivity

    val localeParam = localeID?.let { "?locale_id=$it" } ?: ""

    val deepLink = "appcues-$applicationID://sdk/experience_preview/$experienceID$localeParam"
    val uri = Uri.parse(deepLink)
    if (activity != null) {
        val intent = Intent(Intent.ACTION_VIEW)
        intent.data = uri
        promise.resolve(previewInstance.onNewIntent(activity, intent) ?: false)
    } else {
      promise.reject("Preview Failure", "Unable to handle the URL, no current running Activity found")
    }
  }
}
