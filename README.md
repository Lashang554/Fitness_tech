# Fitness Tech

Fitness Tech is an Expo + React Native app styled with **NativeWind**,
which lets the app use Tailwind-style classes in React Native components.

## Project Structure

```text
fitness_tech/
  App.tsx                 # Main app screen and current UI
  index.js                # Expo entry file; imports global.css and registers App
  global.css              # NativeWind Tailwind directives
  app.json                # Expo app configuration
  package.json            # Dependencies and npm scripts
  package-lock.json       # Locked npm dependency versions
  babel.config.js         # Expo + NativeWind Babel setup
  metro.config.js         # Expo Metro setup with NativeWind
  tailwind.config.js      # Tailwind/NativeWind theme and content paths
  tsconfig.json           # TypeScript configuration
  nativewind-env.d.ts     # NativeWind TypeScript declarations
  assets/                 # Expo app icons and splash images
    adaptive-icon.png
    favicon.png
    icon.png
    splash-icon.png
  src/                    # Planned app organization folders
    components/           # Reusable UI components
    hooks/                # Custom React hooks
    navigation/           # Navigation setup
    screens/              # Screen-level components
    theme/                # Theme constants and styling helpers
    utils/                # Utility functions
```

Note: the current app UI is in `App.tsx`. The `src/` folders are available
for organizing the app as it grows.

## Requirements

- Node.js
- npm
- Expo Go on your phone for mobile testing
- Android Studio or Xcode if you want to run an emulator/simulator

## Install Dependencies

Run this once after cloning or downloading the project:

```bash
npm install
```

## Start The Project

### Start normally

```bash
npm start
```

This runs:

```bash
expo start
```

After the Expo dev server opens, choose how you want to run the app:

- Press `a` for Android emulator/device.
- Press `i` for iOS simulator.
- Press `w` for web.
- Scan the QR code with Expo Go to run on your phone.

### Start on a phone with tunnel mode

Use this if your phone and computer are not connecting on the same network:

```bash
npx expo start --tunnel -c
```

Then scan the QR code with Expo Go.

### Start on web

```bash
npm run web
```

### Start on Android

```bash
npm run android
```

### Start on iOS

```bash
npm run ios
```

## Available Scripts

```bash
npm start        # Start the Expo dev server
npm run android  # Start Expo for Android
npm run ios      # Start Expo for iOS
npm run web      # Start Expo for web
```

## NativeWind Setup

NativeWind is already configured in these files:

- `index.js` imports `./global.css`.
- `global.css` includes Tailwind base, component, and utility directives.
- `babel.config.js` enables `nativewind/babel` and `jsxImportSource`.
- `tailwind.config.js` uses `nativewind/preset` and defines the `active-lime` color.
- `metro.config.js` wraps Expo Metro with `withNativeWind(...)`.

If you change Tailwind, NativeWind, Babel, or Metro config files, stop the
Expo server and start it again with cache clearing:

```bash
npx expo start -c
```
