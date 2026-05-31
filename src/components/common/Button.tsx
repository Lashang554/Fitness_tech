import { Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, className = '', ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      className={`items-center rounded-xl bg-active-lime px-4 py-3 ${className}`}
      activeOpacity={0.85}
      {...props}
    >
      <Text className="font-bold text-black">{title}</Text>
    </TouchableOpacity>
  );
}
