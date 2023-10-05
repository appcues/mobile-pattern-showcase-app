# Assumes that source font files are located in ./assets/fonts
# This script is meant to be run only once per xcodeproj because it doesn't check if a resource is already added

# Can rely on this being installed because cocoapods is installed
require 'xcodeproj'

puts 'Add fonts to bundle'

project_path = Dir["ios/*.xcodeproj"].first
project = Xcodeproj::Project.open(project_path)
target = project.targets.first

resource_paths = Dir['assets/fonts/*.ttf'].map { |file_path| project.new_file("../#{file_path}") }
target.add_resources(resource_paths)

# Print the files for debugging
puts resource_paths

puts 'Saving Xcode project'
project.save
