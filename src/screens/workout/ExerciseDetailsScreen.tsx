import { Text } from 'react-native';
import { ScreenWrapper } from '../../components/common/ScreenWrapper';
import { Header } from '../../components/common/Header';

export function ExerciseDetailsScreen() {
  return (
    <ScreenWrapper>
      <Header title="Exercise" subtitle="Movement details" />
      <Text className="text-zinc-500">Exercise details will go here.</Text>
    </ScreenWrapper>
  );
}
