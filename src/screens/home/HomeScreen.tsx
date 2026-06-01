import { Text, TouchableOpacity, View } from 'react-native';
import { Header } from '../../components/common/Header';
import { ScreenWrapper } from '../../components/common/ScreenWrapper';
import { useWorkout } from '../../hooks/useWorkout';
import { formatCalories, formatMinutes } from '../../utils/formatters';

export function HomeScreen() {
  const { workouts, totalCalories, totalMinutes } = useWorkout();

  return (
    <ScreenWrapper>
      <View className="mt-10">
        <Header title="Activity" subtitle="Wednesday, May 6" />
      </View>

      <View className="items-center justify-center my-10">
        <TouchableOpacity className="w-64 h-64 rounded-full border-[15px] border-active-lime items-center justify-center">
          <Text className="text-white text-5xl font-black">6,240</Text>
          <Text className="text-gray-500 font-semibold tracking-tighter">STEPS</Text>
        </TouchableOpacity>
      </View>

      <Text className="mb-4 text-xl font-bold text-white">Daily Workouts</Text>
      <View className="mb-4 flex-row gap-3">
        <View className="flex-1 rounded-xl bg-zinc-900 p-4">
          <Text className="text-xs font-semibold uppercase text-zinc-500">Time</Text>
          <Text className="mt-1 text-2xl font-bold text-white">{formatMinutes(totalMinutes)}</Text>
        </View>
        <View className="flex-1 rounded-xl bg-zinc-900 p-4">
          <Text className="text-xs font-semibold uppercase text-zinc-500">Calories</Text>
          <Text className="mt-1 text-2xl font-bold text-white">
            {formatCalories(totalCalories)}
          </Text>
        </View>
      </View>
      {workouts.map((workout) => (
        <View key={workout.id} className="mb-3 rounded-2xl bg-zinc-900 p-5">
          <Text className="text-lg font-bold text-white">{workout.title}</Text>
          <Text className="text-zinc-500">
            {workout.durationMinutes} Min - {workout.intensity} Intensity
          </Text>
        </View>
      ))}
    </ScreenWrapper>
  );
}
