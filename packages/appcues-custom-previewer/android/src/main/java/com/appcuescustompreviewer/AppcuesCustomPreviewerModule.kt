package com.appcuescustompreviewer

import android.content.Intent
import android.net.Uri
import com.appcues.Appcues
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class AppcuesCustomPreviewerModule internal constructor(private val context: ReactApplicationContext) :
  AppcuesCustomPreviewerSpec(context) {

  override fun getName(): String {
    return NAME
  }

  @ReactMethod
  override fun preview(accountID: String, applicationID: String, experienceID: String, localeID: String?, promise: Promise) {
    val previewInstance = Appcues(context, accountID, applicationID)

    val activity = context.currentActivity

    val localeParam = localeID?.let { "?locale_id=$it" } ?: ""

    val deepLink = "appcues-$applicationID://sdk/experience_preview/$experienceID$localeParam"
    val uri = Uri.parse(deepLink)
    if (activity != null) {
      val intent = Intent(Intent.ACTION_VIEW)
      intent.data = uri
      promise.resolve(previewInstance.onNewIntent(activity, intent))
    } else {
      promise.reject("Preview Failure", "Unable to handle the URL, no current running Activity found")
    }
  }

  companion object {
    const val NAME = "AppcuesCustomPreviewer"
  }
}
