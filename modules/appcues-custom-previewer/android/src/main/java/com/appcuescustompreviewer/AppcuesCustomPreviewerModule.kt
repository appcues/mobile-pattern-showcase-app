package com.appcuescustompreviewer

import android.content.Intent
import android.net.Uri
import com.appcues.Appcues
import expo.modules.kotlin.Promise
import expo.modules.kotlin.exception.CodedException
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class AppcuesCustomPreviewerModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("AppcuesCustomPreviewer")

    AsyncFunction("preview") { accountID: String, applicationID: String, experienceID: String, localeID: String?, promise: Promise ->
      val context = appContext.reactContext ?: run {
        promise.reject(CodedException("Preview Failure", Exception("No React context available")))
        return@AsyncFunction
      }

      val previewInstance = Appcues(context, accountID, applicationID)
      val activity = appContext.currentActivity

      val localeParam = localeID?.let { "?locale_id=$it" } ?: ""
      val deepLink = "appcues-$applicationID://sdk/experience_preview/$experienceID$localeParam"
      val uri = Uri.parse(deepLink)

      if (activity != null) {
        val intent = Intent(Intent.ACTION_VIEW)
        intent.data = uri
        promise.resolve(previewInstance.onNewIntent(activity, intent))
      } else {
        promise.reject(CodedException("Preview Failure", Exception("No current running Activity found")))
      }
    }
  }
}
