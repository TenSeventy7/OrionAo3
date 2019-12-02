![app icon](https://gitlab.com/TenSeventy7/arion-ao3/raw/master/press/android/mipmap-xhdpi/ic_launcher.png)
# Arion (ArionAo3)

Arion is a mobile client for the [Archive of Our Own](https://archiveofourown.org). Written in Angular and with the Ionic Framework.

## Pre-requisites
* Ionic Framework 4
* node.js 13.x or higher
* npm 6 or higher

## Installation
Refer from [Ionic](https://ionicframework.com/docs/installation/cli)'s documentation to install Ionic.

After cloning this repository, initialize the project's directory with Ionic.
```bash
ionic init 
```
Then install the dependencies.
```bash
npm install 
```

## Building the App
As this is built with Ionic Capacitor, build all components first then sync them before compiling.
```bash
ionic build
npx cap copy
npx cap sync
```

Capacitor does not have a native way to build using the CLI. Build it using Android Studio and/or Xcode instead.
```bash
npx cap copy android
npx cap open android
```

My repository doesn't currently have iOS support out-of-the-box. You can add it yourself.
```bash
npx cap add ios
npx cap copy ios
npx cap open ios
```

Refer to [Ionic](https://ionicframework.com/docs) and [Angular](https://angular.io/docsdocumentation)'s documentation to modify and/or use this app.

## Contributing
For people viewing, forking, or cloning this repository using its [GitHub](https://github.com/TenSeventy7/ArionAo3) and [Bitbucket](https://bitbucket.org/tenseventy7/arionao3) mirrors, **never report your issues or make pull requests there.** These are only mirrors and are not monitored for bug reports and pull requests. Please directly make commits on GitLab so I can merge your commits.

I haven't implemented a way to actually search and browse AO3 for this app. Reasons include AO3's current lack of a proper API and time from my part.

Pull requests are always welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to test code before opening a pull request as to make merging efficient and convenient for everyone. Always remember to keep your code merged with current sources as well.

## License
Arion is licensed in [GPLv3](https://gitlab.com/TenSeventy7/arion-ao3/raw/master/LICENSE)
