import { Text } from 'react-native';
import { ScreenWrapper } from '../../components/common/ScreenWrapper';
import { Header } from '../../components/common/Header';

export function SettingsScreen() {
  return (
    <ScreenWrapper>
      <Header title="Settings" subtitle="Manage preferences" />
      <Text className="text-zinc-500">Settings controls will go here.</Text>
    </ScreenWrapper>
  );
}
