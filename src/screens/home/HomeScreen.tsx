import { Text, TouchableOpacity, View } from 'react-native';
import { Header } from '../../components/common/Header';
import { ScreenWrapper } from '../../components/common/ScreenWrapper';
import { useWorkout } from '../../hooks/useWorkout';

export function HomeScreen() {
  const { workouts } = useWorkout();

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
