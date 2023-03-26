import { View, Text } from 'react-native';

interface ButtonProps {
  children?: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <View>
      <Text>Button</Text>
    </View>
  );
}
