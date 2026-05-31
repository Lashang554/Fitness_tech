import { apiClient } from '../client';
import type { Workout } from '../../types/workout.types';

export const workoutService = {
  getWorkouts() {
    return apiClient<Workout[]>('/workouts');
  },

  getWorkout(id: string) {
    return apiClient<Workout>(`/workouts/${id}`);
  },
};
