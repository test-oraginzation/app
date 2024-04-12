import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';

interface Props {
  icon: JSX.Element;
  onPress: () => void;
  style?: ViewStyle;
}
export const ButtonIcon = (props: Props) => {
  return (
    <TouchableOpacity style={props.style} onPress={props.onPress}>
      {props.icon}
    </TouchableOpacity>
  );
};
