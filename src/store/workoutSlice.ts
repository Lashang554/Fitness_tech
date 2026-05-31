import type { Workout } from '../types/workout.types';

export type WorkoutState = {
  workouts: Workout[];
};

export const initialWorkoutState: WorkoutState = {
  workouts: [],
};
