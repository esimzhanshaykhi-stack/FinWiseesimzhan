import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS } from './theme';

export default function CustomButton({ title, onPress, secondary = false }) {
  return (
    <TouchableOpacity
      style={[styles.button, secondary && styles.secondary]}
      onPress={onPress}
    >
      <Text style={[styles.text, secondary && styles.secondaryText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 8,
  },
  secondary: { backgroundColor: COLORS.light },
  text: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
  secondaryText: { color: COLORS.dark },
});