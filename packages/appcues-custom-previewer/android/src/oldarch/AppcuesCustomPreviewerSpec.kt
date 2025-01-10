package com.appcuescustompreviewer

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.Promise

abstract class AppcuesCustomPreviewerSpec internal constructor(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  abstract fun preview(accountID: String, applicationID: String, experienceID: String, localeID: String?, promise: Promise)
}
