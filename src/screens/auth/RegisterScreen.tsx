import { Text } from 'react-native';
import { ScreenWrapper } from '../../components/common/ScreenWrapper';
import { Header } from '../../components/common/Header';

export function RegisterScreen() {
  return (
    <ScreenWrapper>
      <Header title="Register" subtitle="Create your account" />
      <Text className="text-zinc-500">Registration form will go here.</Text>
    </ScreenWrapper>
  );
}
