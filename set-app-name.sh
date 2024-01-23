#!/bin/bash

if [[ "$EAS_BUILD_PLATFORM" == "android" ]]; then
  # Note: the following 3 lines updating the app name is unrelated to font configuration and should not be copied.
  echo "Update app name"
  # on macos: -i ''
  sed -i 's/Showcase/Appcues/' android/app/src/main/res/values/strings.xml
fi
