import { NativeModules } from 'react-native';

const LINKING_ERROR = `The package 'appcues-custom-previewer' doesn't seem to be linked.`;

const AppcuesCustomPreviewer = NativeModules.AppcuesCustomPreviewer
  ? NativeModules.AppcuesCustomPreviewer
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function previewAppcuesExperience(
  accountID,
  applicationID,
  experienceID
) {
  return AppcuesCustomPreviewer.preview(accountID, applicationID, experienceID);
}
