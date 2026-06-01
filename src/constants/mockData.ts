import type { Workout } from '../types/workout.types';

export const mockWorkouts: Workout[] = [
  {
    id: 'morning-yoga',
    title: 'Morning Yoga',
    durationMinutes: 20,
    intensity: 'Low',
    category: 'Mobility',
    calories: 85,
  },
  {
    id: 'strength-circuit',
    title: 'Strength Circuit',
    durationMinutes: 35,
    intensity: 'High',
    category: 'Strength',
    calories: 310,
  },
  {
    id: 'evening-cardio',
    title: 'Evening Cardio',
    durationMinutes: 28,
    intensity: 'Medium',
    category: 'Cardio',
    calories: 240,
  },
];
