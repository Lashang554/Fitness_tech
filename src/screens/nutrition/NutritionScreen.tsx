import { Text } from 'react-native';
import { ScreenWrapper } from '../../components/common/ScreenWrapper';
import { Header } from '../../components/common/Header';

export function NutritionScreen() {
  return (
    <ScreenWrapper>
      <Header title="Nutrition" subtitle="Fuel your day" />
      <Text className="text-zinc-500">Nutrition tracking will go here.</Text>
    </ScreenWrapper>
  );
}
