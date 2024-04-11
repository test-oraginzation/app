import React, {FC} from 'react';
import {createIconSetFromFontello} from 'react-native-vector-icons';
import {ColorValue, TouchableOpacity, ViewStyle} from 'react-native';
import fontelloConfig from '../../../../configs/fontello.json';
const FontelloIcon = createIconSetFromFontello(fontelloConfig);
interface IProps {
  name: string;
  size: number;
  color?: ColorValue;
  style?: unknown;
  onPress?: () => void;
  buttonStyle?: ViewStyle | ViewStyle[];
  disabled?: boolean;
}
export const Icon: FC<IProps> = props => {
  if (props.onPress) {
    return (
      <TouchableOpacity
        disabled={props.disabled}
        onPress={props.onPress}
        style={props.buttonStyle}
        activeOpacity={0.3}>
        <FontelloIcon {...props} onPress={() => {}} />
      </TouchableOpacity>
    );
  }
  return <FontelloIcon {...props} />;
};
