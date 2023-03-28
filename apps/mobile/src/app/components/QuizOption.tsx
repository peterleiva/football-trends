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
        <Text style={[selected && styles.selectedText, styles.containerText]}>
          <Text style={styles.number}>{order}</Text>
          <Divider />
          <Text style={styles.title}>{capitalize(text)}</Text>
        </Text>
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
  selected: {
    backgroundColor: '#00A8CC',
  },
  containerText: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedText: {
    color: '#FFFFFF',
  },
  active: {
    opacity: 0.8,
  },
  title: {
    fontWeight: 'bold',
    marginLeft: 12,
  },
  number: {
    marginRight: 12,
    fontWeight: 'bold',
  },
});
