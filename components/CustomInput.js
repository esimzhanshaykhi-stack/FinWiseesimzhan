import { StyleSheet, TextInput } from 'react-native';
import { COLORS } from './theme';

export default function CustomInput(props) {
  return (
    <TextInput
      {...props}
      placeholderTextColor={COLORS.gray}
      style={[styles.input, props.style]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: COLORS.light,
    fontSize: 15,
  },
});