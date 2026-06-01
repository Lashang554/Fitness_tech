import { useMemo } from 'react';
import { mockWorkouts } from '../constants/mockData';

export function useWorkout() {
  return useMemo(() => {
    const totalMinutes = mockWorkouts.reduce(
      (total, workout) => total + workout.durationMinutes,
      0,
    );
    const totalCalories = mockWorkouts.reduce((total, workout) => total + workout.calories, 0);

    return { workouts: mockWorkouts, totalMinutes, totalCalories };
  }, []);
}
