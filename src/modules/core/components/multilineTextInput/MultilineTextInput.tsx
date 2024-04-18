import React from 'react';
import {TextInput, TextStyle} from 'react-native';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  maxLength?: number;
  style?: TextStyle;
  secureTextEntry?: boolean;
  numberOfLines?: number;
}
const MultilineTextInput = ({
  value,
  onChangeText,
  placeholder,
  style,
  secureTextEntry,
  numberOfLines,
  maxLength,
}: InputProps) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      multiline
      numberOfLines={numberOfLines}
      maxLength={maxLength}
      secureTextEntry={secureTextEntry}
      style={[
        {
          borderRadius: 10,
          backgroundColor: 'white',
          fontFamily: 'Poppins-Regular',
          fontSize: 16,
          color: 'black',
        },
        style,
      ]}
      autoCapitalize="none"
    />
  );
};

export default MultilineTextInput;
