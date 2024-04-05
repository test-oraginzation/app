import React from 'react';
import {TextInput, TextStyle} from 'react-native';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  style?: TextStyle;
  secureTextEntry?: boolean;
}
const PrimaryInput = ({
  value,
  onChangeText,
  placeholder,
  style,
  secureTextEntry,
}: InputProps) => {
  return (
    <TextInput
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
