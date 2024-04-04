import React from 'react';
import {TextInput, TextStyle} from 'react-native';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  style?: TextStyle;
}
const PrimaryInput = ({
  value,
  onChangeText,
  placeholder,
  style,
}: InputProps) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
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
