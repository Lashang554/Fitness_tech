import { Text, View } from 'react-native';

type HeaderProps = {
  title: string;
  subtitle?: string;
};

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <View className="mb-6">
      <Text className="text-4xl font-bold text-white">{title}</Text>
      {subtitle ? <Text className="mt-1 text-zinc-500">{subtitle}</Text> : null}
    </View>
  );
}
