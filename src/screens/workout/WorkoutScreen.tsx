import { Text, View } from 'react-native';
import { ScreenWrapper } from '../../components/common/ScreenWrapper';
import { Header } from '../../components/common/Header';
import { useWorkout } from '../../hooks/useWorkout';
import { formatCalories, formatMinutes } from '../../utils/formatters';

export function WorkoutScreen() {
  const { workouts } = useWorkout();

  return (
    <ScreenWrapper>
      <Header title="Workout" subtitle="Track your training" />
      {workouts.map((workout) => (
        <View key={workout.id} className="mb-3 rounded-2xl bg-zinc-900 p-5">
          <View className="mb-3 flex-row items-center justify-between">
            <Text className="text-lg font-bold text-white">{workout.title}</Text>
            <Text className="rounded-full bg-active-lime px-3 py-1 text-xs font-bold text-black">
              {workout.category}
            </Text>
          </View>
          <Text className="text-zinc-500">
            {formatMinutes(workout.durationMinutes)} - {workout.intensity} -{' '}
            {formatCalories(workout.calories)}
          </Text>
        </View>
      ))}
    </ScreenWrapper>
  );
}
