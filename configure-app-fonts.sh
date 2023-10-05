#!/bin/bash

# Assumes that source font files are located in ./assets/fonts

if [[ "$EAS_BUILD_PLATFORM" == "android" ]]; then
  echo "Copy fonts to resources"
  mkdir -p ./android/app/src/main/assets/fonts && cp ./assets/fonts/*.ttf "$_"
  ls -1 ./android/app/src/main/assets/fonts
elif [[ "$EAS_BUILD_PLATFORM" == "ios" ]]; then
  ruby ./bundle-ios-fonts.rb
fi
