# Building the Orion Android APK Locally

If you prefer a native `.apk` file instead of the web/PWA version, you can build it locally on your computer in 2 minutes:

### Prerequisites
1. Install [Node.js](https://nodejs.org/)
2. Install [Android Studio](https://developer.android.com/studio) (with Android SDK)

### Build Commands
Open your terminal in the cloned Orion-Forge folder and run:

```bash
# 1. Install dependencies
npm install

# 2. Initialize Capacitor Android platform
npx cap add android

# 3. Copy web assets to Android project
npx cap sync android

# 4. Open in Android Studio to build APK
npx cap open android
```

Once Android Studio opens:
1. Click **Build** ➔ **Build Bundle(s) / APK(s)** ➔ **Build APK(s)**.
2. Android Studio will generate your native `.apk` file ready to install on your phone!
