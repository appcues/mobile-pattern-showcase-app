#import <React/RCTBridgeModule.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import <AppcuesCustomPreviewerSpec/AppcuesCustomPreviewerSpec.h>
@interface RCT_EXTERN_MODULE(AppcuesCustomPreviewer, NativeAppcuesCustomPreviewerSpecBase)
#else
@interface RCT_EXTERN_MODULE(AppcuesCustomPreviewer, NSObject)
#endif

RCT_EXTERN_METHOD(preview:(NSString)accountID
                  applicationID:(NSString)applicationID
                  experienceID:(NSString)experienceID
                  localeID:(NSString)localeID
                  withResolver:(RCTPromiseResolveBlock)resolve
                  withRejecter:(RCTPromiseRejectBlock)reject)

#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeAppcuesCustomPreviewerSpecJSI>(params);
}
#endif

@end
