import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const GoBack = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Image
        source={require('../../../assets/images/Left.png')}
        style={{width: 24, height: 24}}
      />
    </TouchableOpacity>
  );
};

export default GoBack;
