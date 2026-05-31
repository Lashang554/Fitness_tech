export type WorkoutIntensity = 'Low' | 'Medium' | 'High';

export type Workout = {
  id: string;
  title: string;
  durationMinutes: number;
  intensity: WorkoutIntensity;
};
