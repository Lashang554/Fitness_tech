import { TextInput, type TextInputProps } from 'react-native';

export function Input({ className = '', placeholderTextColor = '#71717a', ...props }: TextInputProps) {
  return (
    <TextInput
      className={`rounded-xl bg-zinc-900 px-4 py-3 text-white ${className}`}
      placeholderTextColor={placeholderTextColor}
      {...props}
    />
  );
}
