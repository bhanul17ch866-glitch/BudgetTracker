# Budget Tracker — Android/Capacitor shell

This project intentionally keeps the supplied **Budget Tracker v74** HTML/JS application intact and places it in `www/index.html`.

## What is protected

Do not rewrite or migrate the existing financial engine unless a separate regression-tested change is explicitly requested. In particular, preserve:

- existing transaction calculations and decimal/exact handling
- `localStorage` keys and JSON structures
- loan, card, Chitti and split storage
- balance/summary rules and aggregate-entry exclusions
- backup/restore behavior
- existing PWA/offline/share logic

The native layer is intended to be an app shell, not a replacement for the web application.

## Build setup

Capacitor 8 is configured in `package.json` and `capacitor.config.ts`.

1. Install Node.js and Android Studio.
2. From this folder run:

```bash
npm install
npx cap add android
npx cap sync android
npx cap open android
```

3. In Android Studio, run the app on a device/emulator.
4. For a release build, configure a signing key in Android Studio and build an Android App Bundle (`.aab`).

## App data compatibility

The app continues to use the original web storage keys. Capacitor provides the application with a stable app origin, so the existing `localStorage`-based persistence can remain the source of truth. No database migration is introduced by this shell.

## Important note about external web assets

The original file loads Google Fonts and Tesseract.js from CDNs. The first native version therefore still depends on network access for those resources. If full offline OCR/font availability is required, bundle those assets in a later, separately tested change.

## Native integration implemented

The shell now includes Capacitor App back-button handling, Android status-bar configuration, safe-area CSS, and Capacitor Splash Screen configuration. These additions are isolated from the financial engine and storage layer.

## Native integration roadmap

Keep these as small isolated changes around the existing page:

- Android back button behavior
- status/navigation bar appearance
- launcher icon and splash screen
- Android share/receive integration if needed
- optional local notifications for existing alert rules
- release signing and Play Store metadata

Do not move the financial calculations into Kotlin/Java.

## Source verification

Run:

```bash
npm run verify:source
```

The copied `www/index.html` is the supplied v74 file. The verification script is deliberately simple so that later native-shell work cannot silently replace the web engine.

## Phone-only APK build

This project includes GitHub Actions workflows. You can upload this folder to a GitHub repository from your phone. GitHub's hosted runner will install Node/Java, generate the Android project, build the debug APK, and attach the APK to the workflow run as an artifact. No Android Studio is required on the phone.

Workflow: `.github/workflows/build-android.yml`

After pushing to `main`/`master`, open the repository's **Actions** tab, open **Build Android APK**, select the successful run, and download the `Budget-Tracker-debug-apk` artifact.
