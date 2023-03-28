import { capitalize } from '@utils';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Divider from './Divider';

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
}

export default function QuizOption({
  order,
  text,
  selected = false,
}: QuizOptionProps) {
  const [pressing, setPressing] = useState<boolean>(false);

  return (
    <Pressable
      style={[styles.option, pressing && styles.active]}
      onPressIn={() => setPressing(true)}
      onPressOut={() => setPressing(false)}
    >
      <Text style={styles.optionNumber}>{order}</Text>
      <Divider />
      <View>
        <Text style={styles.optionTitle}>{capitalize(text)}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  option: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  active: {
    backgroundColor: '#D8D8D8',
    opacity: 0.8,
  },
  optionTitle: {
    fontWeight: 'bold',
    marginLeft: 12,
  },
  optionNumber: {
    marginRight: 12,
    fontWeight: 'bold',
  },
});
