#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(AppcuesCustomPreviewer, NSObject)

RCT_EXTERN_METHOD(preview:(NSString)accountID
                  applicationID:(NSString)applicationID
                  experienceID:(NSString)experienceID
                  localeID:(NSString)localeID
                  withResolver:(RCTPromiseResolveBlock)resolve
                  withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
