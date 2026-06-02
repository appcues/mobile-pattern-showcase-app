const LINKING_ERROR = `The package 'appcues-custom-previewer' doesn't seem to be linked.`;

const Module = require('./specs/NativeAppcuesCustomPreviewer').default;

const AppcuesCustomPreviewer = Module
  ? Module
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
  experienceID,
  localeID
) {
  return AppcuesCustomPreviewer.preview(
    accountID,
    applicationID,
    experienceID,
    localeID
  );
}
