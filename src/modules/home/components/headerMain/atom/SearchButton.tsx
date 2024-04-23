import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {Icon} from '../../../../core/components/icons/iconsComponents.tsx';

interface ButtonProps {
  onPress: () => void;
  style?: ViewStyle;
}

const SearchButton = ({onPress, style}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        style,
        {
          alignSelf: 'center',
          width: 36,
          height: 36,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#CEECFD',
          borderRadius: 10,
        },
      ]}
      onPress={onPress}>
      <Icon name={'search'} size={24} color={'#4E9FFF'} />
    </TouchableOpacity>
  );
};

export default SearchButton;
