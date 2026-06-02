Pod::Spec.new do |s|
  s.name         = "appcues-custom-previewer"
  s.version      = "1.0.0"
  s.summary      = "Previewer for Appcues flows"
  s.homepage     = "https://github.com/appcues/mobile-pattern-showcase-app"
  s.license      = "MIT"
  s.authors      = "Appcues"

  s.platforms    = { :ios => "16.4" }
  s.source       = { :git => "https://github.com/appcues/mobile-pattern-showcase-app.git" }
  s.swift_version = "5.9"

  s.source_files = "**/*.swift"

  s.dependency "ExpoModulesCore"
  s.dependency "Appcues"
end
