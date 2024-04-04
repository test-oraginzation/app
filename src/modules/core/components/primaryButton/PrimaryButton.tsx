import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';

interface ButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
  isDesable?: boolean;
}

const PrimaryButton = ({label, onPress, style, isDesable}: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={isDesable}
      style={[
        style,
        {
          alignSelf: 'center',
          width: 343,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isDesable ? '#CEDAE6' : '#4E9FFF',
          borderRadius: 50,
        },
      ]}
      onPress={onPress}>
      <Text
        style={{
          fontFamily: 'Poppins-SemiBold',
          color: 'white',
          fontSize: 16,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
