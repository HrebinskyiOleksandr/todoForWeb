import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  [key: string]: any;
}
export const PrimaryInput: React.FC<InputProps> = ({ value, onChangeText, placeholder, ...rest }) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="#999"
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
  },
});
