const Manifest = require('@expo/config-plugins/build/android/Manifest');
const configPlugins = require('expo/config-plugins');

// Sets `android:supportsRtl="true"` on the AndroidManifest `<application>`.
// Refer to https://developer.android.com/guide/topics/manifest/application-element#supportsrtl
// And https://reactnative.dev/blog/2016/08/19/right-to-left-support-for-react-native-apps#making-an-app-rtl-ready
exports.default = (config) =>
  configPlugins.withAndroidManifest(config, (config) => {
    const mainApplication = Manifest.getMainApplicationOrThrow(
      config.modResults
    );
    mainApplication.$['android:supportsRtl'] = 'true';
    return config;
  });
