# RBOWS-1

RBOWS-1 is an Android prototype inspired by the Windows 11 phone-style concept.

## Included concept
- OS shell name: **RBOWS 1**
- Gaming app name: **RQBBOX** (Xbox-inspired)
- Target platform: **Android**

## What is implemented
- Native Android app using Kotlin + Jetpack Compose.
- A home screen concept branded as RBOWS 1.
- A featured gaming tile and section for **RQBBOX**.

## Run locally
1. Open this folder in Android Studio (Jellyfish or newer recommended).
2. Let Gradle sync.
3. Run the `app` module on an Android device or emulator.

## Guide: how to put RBOWS 1 on an Android phone

### Option A: Install directly from Android Studio (recommended)
1. Install **Android Studio** on your computer.
2. Open this project folder in Android Studio.
3. Connect your Android phone with a USB cable.
4. On your phone, enable Developer Options:
   - Open **Settings > About phone**.
   - Tap **Build number** 7 times.
5. Enable **USB debugging**:
   - Open **Settings > Developer options**.
   - Turn on **USB debugging**.
6. In Android Studio, choose your connected phone from the device list.
7. Click **Run ▶** for the `app` module.
8. Wait for install to finish, then open **RBOWS 1** on your phone.

### Option B: Build APK and install manually
1. Open project in Android Studio.
2. Go to **Build > Build Bundle(s) / APK(s) > Build APK(s)**.
3. After build finishes, click **locate** to find the APK.
4. Copy APK to your Android phone.
5. On phone, allow installing from unknown apps (for your file manager/browser).
6. Tap APK file and install.

## Troubleshooting
- If device is not shown in Android Studio, reconnect USB and accept the debug permission popup on phone.
- If Gradle sync/build fails, check internet access and Android SDK installation inside Android Studio.
- If install fails, uninstall older app version and reinstall.


## Web UI code (React)
- Added a React implementation draft at `web/src/App.jsx` based on your requested RBOWS 1 mobile suite structure.
- You can copy this into a React + Tailwind project and wire it as the main `App` component.
