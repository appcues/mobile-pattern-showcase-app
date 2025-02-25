# React Native 0.75 (Expo 51) Debug Branch

This branch is a snapshot of a React Native 0.75 app using Expo 51.

## Setup

```sh
# just to be safe
$ rm -rf node_modules
$ npm install
$ npx expo prebuild --clean
$ npm run start
```

### New Architecture

1. The new arch can be toggled on and off in `app.json`

   ```json
   {
     "expo": {
       ...
       "plugins": [
         ...
         [
           "expo-build-properties",
           {
             "android": {
               "newArchEnabled": true
             },
             "ios": {
               "newArchEnabled": true
             }
           }
         ]
       ]
     }
   }
   ```
2. To be safe, run the setup steps again, including deleteing the `node_modules`.

### Testing changes to the Appcues module

```sh
# in appcues-react-native-module
npm pack

# in this repo (use correct path and version number)
npm install ../appcues-react-native-module/appcues-react-native-#.#.#.tgz
```
