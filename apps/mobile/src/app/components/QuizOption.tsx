import { capitalize, getColor, grayScale } from '@utils';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Divider from './Divider';
import Typography from './Typography';

interface QuizOptionProps {
  /**
   * Number relative relative to other options
   */
  order: number;
  /**
   * Text describing the option
   */
  text: string;
  /**
   *  Indicates the option is selected
   */
  selected?: boolean;
  /**
   * Called when option is pressed
   */
  onSelect?: () => void;
}

export default function QuizOption({
  order,
  text,
  selected = false,
  onSelect,
}: QuizOptionProps) {
  const [pressing, setPressing] = useState<boolean>(false);

  return (
    <Pressable
      onPressIn={() => setPressing(true)}
      onPressOut={() => setPressing(false)}
      onPress={() => onSelect?.()}
    >
      <View
        style={[
          styles.option,
          pressing && styles.active,
          selected && styles.selected,
        ]}
      >
        <Typography theme={selected ? 'onBackground' : 'onForeground'}>
          {order}
        </Typography>
        <Divider color={selected ? 'primary-dark' : undefined} />
        <Typography theme={selected ? 'onBackground' : 'onForeground'}>
          {capitalize(text)}
        </Typography>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  option: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 4,
    backgroundColor: grayScale(100),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  selected: {
    backgroundColor: getColor('primary'),
  },
  active: {
    opacity: 0.8,
  },
});
