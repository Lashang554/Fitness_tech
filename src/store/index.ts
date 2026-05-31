import type { AuthState } from './authSlice';
import type { NutritionState } from './nutritionSlice';
import type { WorkoutState } from './workoutSlice';

export type AppState = {
  auth: AuthState;
  workout: WorkoutState;
  nutrition: NutritionState;
};
