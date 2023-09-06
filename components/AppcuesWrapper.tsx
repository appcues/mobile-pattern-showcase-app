import { NativeModules, UIManager, View, ViewProps } from 'react-native';

// From https://github.com/appcues/appcues-react-native-module/blob/main/docs/ExpoManagedWorkflow.md

// Get native module or use fallback object
const AppcuesWrapper = NativeModules.AppcuesReactNative ?? {
  setup: (accountID: string, applicationID: string, options?: object) => {
    console.log(
      `Appcues.setup(${accountID}, ${applicationID}, ${JSON.stringify(
        options
      )})`
    );
  },
  identify: (userID: string, properties?: object) => {
    console.log(`Appcues.identify(${userID}, ${JSON.stringify(properties)})`);
  },
  reset: () => {
    console.log(`Appcues.reset()`);
  },
  anonymous: () => {
    console.log(`Appcues.anonymous()`);
  },
  group: (groupID: string, properties?: object) => {
    console.log(`Appcues.group(${groupID}, ${JSON.stringify(properties)}`);
  },
  screen: (title: string, properties?: object) => {
    console.log(`Appcues.screen(${title}, ${JSON.stringify(properties)})`);
  },
  track: (name: string, properties?: object) => {
    console.log(`Appcues.track(${name}, ${JSON.stringify(properties)})`);
  },
  show: (experienceID: string) => {
    console.log(`Appcues.show(${experienceID})`);
  },
  debug: () => {
    console.log(`Appcues.debug()`);
  },
  didHandleURL: (url: string) => {
    console.log(`Appcues.didHandleURL(${url})`);
    return false;
  },
};

export async function setup(
  accountID: string,
  applicationID: string,
  options?: object
) {
  return AppcuesWrapper.setup(accountID, applicationID, options, {
    _applicationFramework: 'expo',
  });
}

export function identify(userID: string, properties?: object) {
  AppcuesWrapper.identify(userID, properties);
}

export function reset() {
  AppcuesWrapper.reset();
}

export function anonymous() {
  AppcuesWrapper.anonymous();
}

export function group(groupID: string, properties?: object) {
  AppcuesWrapper.group(groupID, properties);
}

export function screen(title: string, properties?: object) {
  AppcuesWrapper.screen(title, properties);
}

export function track(name: string, properties?: object) {
  AppcuesWrapper.track(name, properties);
}

export function show(experienceID: string) {
  AppcuesWrapper.show(experienceID);
}

export function debug() {
  AppcuesWrapper.debug();
}

export async function didHandleURL(url: string | null) {
  return await AppcuesWrapper.didHandleURL(url);
}

const PlaceholderFrameView = (props: ViewProps) => <View style={props.style} />;

export const WrappedAppcuesFrameView =
  UIManager.getViewManagerConfig('AppcuesFrameView') != null
    ? require('@appcues/react-native').AppcuesFrameView
    : PlaceholderFrameView;
