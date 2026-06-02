import ExpoModulesCore
import AppcuesKit

public class AppcuesCustomPreviewerModule: Module {
  private var previewInstance: Appcues?

  public func definition() -> ModuleDefinition {
    Name("AppcuesCustomPreviewer")

    AsyncFunction("preview") { (accountID: String, applicationID: String, experienceID: String, localeID: String?) -> Bool in
      self.previewInstance = Appcues(config: Appcues.Config(accountID: accountID, applicationID: applicationID))

      guard let previewInstance = self.previewInstance else {
        throw PreviewError.instanceCreationFailed
      }

      let localeParam = localeID.flatMap { "?locale_id=\($0)" } ?? ""

      guard let previewURL = URL(string: "appcues-\(applicationID)://sdk/experience_preview/\(experienceID)\(localeParam)") else {
        throw PreviewError.invalidURL
      }

      return previewInstance.didHandleURL(previewURL)
    }.runOnQueue(.main)
  }
}

enum PreviewError: Error, LocalizedError {
  case instanceCreationFailed
  case invalidURL

  var errorDescription: String? {
    switch self {
    case .instanceCreationFailed:
      return "Could not create preview instance"
    case .invalidURL:
      return "Could not create preview URL"
    }
  }
}
