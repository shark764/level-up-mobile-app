# Level Up App

Mobile Application built with React Native.

## Development Requirements

- Git.
- Node.js v14.16.0 +.
- Yarn v1.22.5 +.
- Android SDK (Java JDK included) and/or iOS SDK.
- Text Editor (VSCode highly recommended with ESLint plug-in).

## Run Instructions (Android)
1. `adb devices` (to start the adb server and be sure the OS is detecting your device).
2. `yarn install`.
3. `yarn start` (in one terminal tab).
4. `npx react-native run-android`  (in another terminal tab).

## Create a Debug APK
1. `react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res`
2. `cd android`
3. `./gradlew assembleDebug`
4. The APK is generated in `android/app/build/outputs/apk/debug/app-debug.apk`

## Android Troubleshooting
- If your changes are not showing try running Metro server with `yarn start --reset-cache` 
- Make sure that you have installed the Android SDK and an Android API (Android Studio's AVD manager is your friend for it).
- Make sure that you have installed one Android emulator or plugged a real device.
- Make sure that adb server is running y detecting your real device.
- Make sure to add the ANDROID_HOME and ANDROID_SDK OS path values.
- Make sure that Metro server is running (Run instructions section - step 3).

## Run tests

- `yarn test`.

## Folder Structure

```
•
├── assets
├── components
│    └── App
│       └── __tests__
│           └── App.test.tsx
├── hooks
├── navigation
├── screens
│   └── Home
│       ├── __tests__
│       │    └── Home.test.tsx
│       ├── Home.tsx
│       ├── Home.styles.ts
│       └── index.ts
├── services   
├── state
├── utils
└── types
```

| Folder     | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| assets     | App's assets (images, etc).                                        |
| components | Shared components.                                                 |
| hooks      | React custom hooks.                                                |
| screens    | Each of the app screens (smart components).                        |
| navigation | Files for App's navigation logic.                                  |
| services   | Files for API calls logic.                                         |
| state      | Application global state files.                                    |
| utils      | App utils (functions or values).                                   |
| types      | Typescript application types.                                      |

## Naming conventions

| File type          | Description                                                         |
| ------------------ | ------------------------------------------------------------------- |
| Components         | React.js components written with Typescript. Use **PascalCase**     |
| Utils or functions | Helper or util functions written with Typescript. Use **camelCase** |

## Used Libraries and Technologies

- TypeScript.
- Jest.
- [Tailwind RN](https://github.com/vadimdemedes/tailwind-rn).
- [Redux Toolkit](https://redux-toolkit.js.org/).
- [Redux Toolkit Query](https://rtk-query-docs.netlify.app/).
- [Redux Persist](https://github.com/rt2zz/redux-persist).
- [React Navigation](https://reactnavigation.org/docs/getting-started).
- [React Native Font Awesome](https://www.npmjs.com/package/@fortawesome/react-native-fontawesome)
