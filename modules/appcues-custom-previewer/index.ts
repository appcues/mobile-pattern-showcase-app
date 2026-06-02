import { requireNativeModule } from 'expo-modules-core';

const AppcuesCustomPreviewer = requireNativeModule('AppcuesCustomPreviewer');

export function previewAppcuesExperience(
  accountID: string,
  applicationID: string,
  experienceID: string,
  localeID?: string
): Promise<boolean> {
  return AppcuesCustomPreviewer.preview(accountID, applicationID, experienceID, localeID);
}
