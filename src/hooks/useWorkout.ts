import { useMemo } from 'react';
import { mockWorkouts } from '../constants/mockData';

export function useWorkout() {
  return useMemo(() => ({ workouts: mockWorkouts }), []);
}
