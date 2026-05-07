# Fitness Tech

Expo + React Native app styled with **NativeWind (Tailwind for React Native)**.

## Folder structure

```text
src/
  components/    # Reusable UI (Buttons, Cards, ProgressRings)
  screens/       # Full page views (Home, WorkoutDetail, Profile)
  navigation/    # Tab and Stack configuration
  hooks/         # Custom logic (e.g., useStepCounter, useTimer)
  theme/         # Tailwind constants / global colors
  utils/         # Helpers (formatters, small utilities)
```

## Prerequisites

- Node.js + npm
- For mobile testing:
  - Expo Go on your phone (recommended)
  - Android or iOS simulator (optional)

## Install

```bash
npm install
```

## Run (Expo)

### 1) Phone with Expo Go
Start the dev server:
```bash
npx expo start --tunnel -c
```
Then scan the QR code shown in the terminal using Expo Go on your phone.

### 2) Web (browser)
```bash
npx expo start --web
```
Open the printed URL (usually `http://localhost:8081`).

### 3) Android / iOS simulators
```bash
npx expo start --android
# or
npx expo start --ios
```

## NativeWind setup notes

- `babel.config.js` includes the `nativewind/babel` plugin and sets `jsxImportSource: "nativewind"`.
- `tailwind.config.js` includes `presets: [require("nativewind/preset")]`.
- `metro.config.js` wraps Expo Metro with `withNativeWind(...)` and points to `global.css`.

If you change Tailwind/NativeWind files, restart the Expo server and reload the app.

