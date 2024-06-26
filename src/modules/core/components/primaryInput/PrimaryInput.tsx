import React from 'react';
import {KeyboardTypeOptions, TextInput, TextStyle} from 'react-native';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  style?: TextStyle;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
}
const PrimaryInput = ({
  value,
  onChangeText,
  placeholder,
  style,
  secureTextEntry,
  keyboardType,
}: InputProps) => {
  return (
    <TextInput
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
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

export default PrimaryInput;
