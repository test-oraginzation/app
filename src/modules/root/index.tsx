import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './navigationGroup/Auth.tsx';

const Root = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Auth />
      </NavigationContainer>
    </View>
  );
};

export default Root;
