import type { ReactNode } from 'react';
import { SafeAreaView, ScrollView, type ScrollViewProps } from 'react-native';

type ScreenWrapperProps = ScrollViewProps & {
  children: ReactNode;
};

export function ScreenWrapper({ children, className = '', ...props }: ScreenWrapperProps) {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView className={`px-5 ${className}`} showsVerticalScrollIndicator={false} {...props}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
