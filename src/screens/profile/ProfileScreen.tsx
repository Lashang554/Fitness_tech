import { Text } from 'react-native';
import { ScreenWrapper } from '../../components/common/ScreenWrapper';
import { Header } from '../../components/common/Header';

export function ProfileScreen() {
  return (
    <ScreenWrapper>
      <Header title="Profile" subtitle="Your fitness account" />
      <Text className="text-zinc-500">Profile details will go here.</Text>
    </ScreenWrapper>
  );
}
