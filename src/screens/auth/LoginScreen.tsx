import { Text } from 'react-native';
import { ScreenWrapper } from '../../components/common/ScreenWrapper';
import { Header } from '../../components/common/Header';

export function LoginScreen() {
  return (
    <ScreenWrapper>
      <Header title="Login" subtitle="Welcome back" />
      <Text className="text-zinc-500">Login form will go here.</Text>
    </ScreenWrapper>
  );
}
