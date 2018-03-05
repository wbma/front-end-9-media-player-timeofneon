# WBMA, Ionic Framework
## Task: Port your app to Ionic framework

Add the features of the previous exercices into an Ionic application:

- user registration & login
- media file listing (incl. thumbnail pipe)
- file upload
- media service

1. Install Ionic & Cordova globally: `npm install -g cordova ionic`
1. Create a new Ionic app: `ionic start <APPNAME> <TEMPLATE>`
    - choose a starter template, [list of available options](https://ionicframework.com/docs/cli/starters.html#ionic-angular)
    - go with tabs/sidemenu template if you want to have some ready made examples of pages and navigation between them
    - choose the default answer (N) for question _'Would you like to integrate your new app with Cordova to target native iOS and Android?'_
    - NOTE: we dont't use ionic1 version or ionic pro services
1. Use Ionic cli to generate pages, `ionic generate page <NAME> [--no-module]`
    - front/home page for media (thumbnail) list view
    - user profile/login/registration pages
    - file upload page
    - use `--no-module` flag if you don't want to create an extra module within your page
1. Generate media provider (service), `ionic generate provider media`
1. Develop & test on browser: `ionic serve` (not 100% reliable, may need restarting after generating new components..)
1. Run & test on mobile device
    - native mobile dev kit is needed, Xcode for iOS or Android SDK for Android
    - add your target platform: `ionic cordova platform add android/ios`
    - connect your device (USB)
    - install & start the app: `ionic cordova run android/ios`
