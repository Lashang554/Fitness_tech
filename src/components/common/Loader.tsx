import { ActivityIndicator, View } from 'react-native';

export function Loader() {
  return (
    <View className="items-center justify-center py-6">
      <ActivityIndicator color="#CCFF00" />
    </View>
  );
}
