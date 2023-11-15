import AppcuesKit

@objc(AppcuesCustomPreviewer)
class AppcuesCustomPreviewer: NSObject {
    private var previewInstance: Appcues?

    @objc(preview:applicationID:experienceID:withResolver:withRejecter:)
    func preview(
        accountID: String,
        applicationID: String,
        experienceID: String,
        resolve:RCTPromiseResolveBlock,
        reject:RCTPromiseRejectBlock
    ) -> Void {
        previewInstance = Appcues(config: Appcues.Config(accountID: accountID, applicationID: applicationID))

        guard let previewInstance = previewInstance else {
            reject("Preview Failure", "Could not create preview instance", nil)
            return
        }

        guard let previewURL = URL(string: "appcues-\(applicationID)://sdk/experience_preview/\(experienceID)") else {
            reject("Preview Failure", "Could not create preview URL", nil)
            return
        }

        let result = previewInstance.didHandleURL(previewURL)

        resolve(result)
    }
}
