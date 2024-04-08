import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity} from 'react-native';

const SkipChoosePhoto = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        // navigation.navigate('');
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
