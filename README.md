# Fitness Tech

Fitness Tech is an Expo + React Native app styled with **NativeWind**,
which lets the app use Tailwind-style classes in React Native components.

## Project Structure

```text
fitness_tech/
|
├── App.tsx
├── index.js
├── app.json
├── babel.config.js
├── metro.config.js
├── tailwind.config.js
├── tsconfig.json
├── global.css
├── .env
|
├── assets/
|   ├── fonts/
|   ├── icons/
|   ├── images/
|   └── animations/
|
├── src/
|   ├── api/
|   |   ├── client.ts
|   |   ├── endpoints.ts
|   |   └── services/
|   |       ├── auth.service.ts
|   |       ├── workout.service.ts
|   |       └── nutrition.service.ts
|   |
|   ├── components/
|   |   ├── common/
|   |   |   ├── Button.tsx
|   |   |   ├── Input.tsx
|   |   |   ├── Loader.tsx
|   |   |   ├── Header.tsx
|   |   |   └── ScreenWrapper.tsx
|   |   ├── workout/
|   |   ├── nutrition/
|   |   └── profile/
|   |
|   ├── constants/
|   |   ├── colors.ts
|   |   ├── fonts.ts
|   |   ├── spacing.ts
|   |   └── mockData.ts
|   |
|   ├── context/
|   |   ├── AuthContext.tsx
|   |   └── ThemeContext.tsx
|   |
|   ├── hooks/
|   |   ├── useAuth.ts
|   |   ├── useTheme.ts
|   |   └── useWorkout.ts
|   |
|   ├── navigation/
|   |   ├── AppNavigator.tsx
|   |   ├── AuthNavigator.tsx
|   |   ├── BottomTabs.tsx
|   |   └── types.ts
|   |
|   ├── screens/
|   |   ├── auth/
|   |   |   ├── LoginScreen.tsx
|   |   |   └── RegisterScreen.tsx
|   |   ├── home/
|   |   |   └── HomeScreen.tsx
|   |   ├── workout/
|   |   |   ├── WorkoutScreen.tsx
|   |   |   └── ExerciseDetailsScreen.tsx
|   |   ├── nutrition/
|   |   |   └── NutritionScreen.tsx
|   |   ├── profile/
|   |   |   └── ProfileScreen.tsx
|   |   └── settings/
|   |       └── SettingsScreen.tsx
|   |
|   ├── services/
|   |   ├── storage/
|   |   |   ├── asyncStorage.ts
|   |   |   └── secureStorage.ts
|   |   ├── notifications/
|   |   |   └── notification.service.ts
|   |   └── analytics/
|   |       └── analytics.service.ts
|   |
|   ├── store/
|   |   ├── index.ts
|   |   ├── authSlice.ts
|   |   ├── workoutSlice.ts
|   |   └── nutritionSlice.ts
|   |
|   ├── theme/
|   |   ├── index.ts
|   |   ├── colors.ts
|   |   └── typography.ts
|   |
|   ├── types/
|   |   ├── auth.types.ts
|   |   ├── workout.types.ts
|   |   └── navigation.types.ts
|   |
|   ├── utils/
|   |   ├── helpers.ts
|   |   ├── validators.ts
|   |   ├── formatters.ts
|   |   └── logger.ts
|   |
|   └── config/
|       ├── env.ts
|       └── index.ts
|
├── tests/
|   ├── components/
|   ├── screens/
|   └── utils/
|
└── README.md
```

Note: the app entry starts in `App.tsx`, then loads `src/navigation/AppNavigator.tsx`.

## Requirements

- Node.js
- npm
- Expo Go on your phone for mobile testing
- Android Studio or Xcode if you want to run an emulator/simulator

## Tech Stack

- Expo
- React Native
- NativeWind
- TypeScript

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
fbvuy
```bash
npx expo start -c
```
