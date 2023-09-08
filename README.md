# Appcues Mobile Showcase

An Expo React Native app to showcase Appcues mobile patterns.

## Setup

```sh
$ npm install
```

## Run/Develop

### Create a development build for emulator/simulator

[Reference](https://docs.expo.dev/develop/development-builds/create-a-build/#create-a-build-for-emulatorsimulator)

A development build update is needed for any changes to the native runtime.

#### Android

```sh
$ eas build --profile development --platform android
```

After the build is complete, the CLI will prompt you to automatically download and install it on the Android Emulator. When prompted, press `Y` to directly install it on the emulator.

#### iOS

```sh
$ eas build --profile development-simulator --platform ios
```

After the build is complete, the CLI will prompt you to automatically download and install the it on the iOS Simulator. When prompted, press `Y` to directly install it on the simulator.

### Download and install an existing development build

If you're just running the app, you can download an existing development build:

#### Android

1. Run `eas build:list --platform android`
2. Look for the latest (eg top of the list) build with `Distribution  internal`.
3. Download the file listed as the corresponding `Artifact`.
4. Drag the downloaded .apk onto an Android emulator.

#### iOS

1. Run `eas build:list --platform ios`
2. Look for the latest (eg top of the list) build with `Distribution  simulator`.
3. Download the file listed as the corresponding `Artifact`.
4. Unzip the downloaded file and drag the .ipa onto an iOS Simulator.

### Run the development server

```sh
$ npm run start
```

## Releasing

### Android

```sh
eas build --platform android
eas submit --platform android --latest
```

(`--latest` flag uses the lastest EAS build)

### iOS (TestFlight)

```sh
eas build --platform ios
eas submit --platform ios --latest
```
