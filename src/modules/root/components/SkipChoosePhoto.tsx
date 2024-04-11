import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity} from 'react-native';
import {RouteKey} from '../../core/typing/enums';

const SkipChoosePhoto = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(RouteKey.TabBar);
      }}>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 16,
          color: 'black',
        }}>
        Skip
      </Text>
    </TouchableOpacity>
  );
};

export default SkipChoosePhoto;
