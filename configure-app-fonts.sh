#!/bin/bash

# Assumes that source font files are located in ./assets/fonts

if [[ "$EAS_BUILD_PLATFORM" == "android" ]]; then
  # Note: the following 3 lines updating the app name is unrelated to font configuration and should not be copied.
  echo "Update app name"
  # on macos: -i ''
  sed -i 's/Showcase/Appcues/' android/app/src/main/res/values/strings.xml

  echo "Copy fonts to resources"
  mkdir -p ./android/app/src/main/assets/fonts && cp ./assets/fonts/*.ttf "$_"
  ls -1 ./android/app/src/main/assets/fonts
elif [[ "$EAS_BUILD_PLATFORM" == "ios" ]]; then
  ruby ./bundle-ios-fonts.rb
fi
