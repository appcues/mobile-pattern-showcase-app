package com.appcuescustompreviewer

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class AppcuesCustomPreviewerPackage : TurboReactPackage() {

  override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? {
    return if (name == AppcuesCustomPreviewerModule.NAME) {
      AppcuesCustomPreviewerModule(reactContext)
    } else {
      null
    }
  }

  override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
    mapOf(
      AppcuesCustomPreviewerModule.NAME to ReactModuleInfo(
        _name = AppcuesCustomPreviewerModule.NAME,
        _className = AppcuesCustomPreviewerModule.NAME,
        _canOverrideExistingModule = false,
        _needsEagerInit = false,
        isCxxModule = false,
        isTurboModule = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
      )
    )
  }
}
