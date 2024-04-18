import React from 'react';
import {View, ViewStyle} from 'react-native';
import {Icon} from '../../../core/components/icons/iconsComponents.tsx';
interface ButtonProps {
  style?: ViewStyle;
  icon: string;
}

const SmallAuxiliaryButton = ({style, icon}: ButtonProps) => {
  return (
    <View
      style={[
        style,
        {
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: 'white',
          borderRadius: 30,
          height: 36,
          justifyContent: 'center',
          width: 36,
          zIndex: 10,
        },
      ]}>
      <Icon name={icon} size={24} color={'#4E9FFF'} />
    </View>
  );
};

export default SmallAuxiliaryButton;
