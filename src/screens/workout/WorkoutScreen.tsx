import { Text } from 'react-native';
import { ScreenWrapper } from '../../components/common/ScreenWrapper';
import { Header } from '../../components/common/Header';

export function WorkoutScreen() {
  return (
    <ScreenWrapper>
      <Header title="Workout" subtitle="Track your training" />
      <Text className="text-zinc-500">Workout list will go here.</Text>
    </ScreenWrapper>
  );
}
