import React from 'react';
import {View} from 'react-native';
import OnBoarding from '../auth/screens/onBoarding/OnBoarding.tsx';
import ChooseName from '../auth/screens/chooseName/ChooseName.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

enum RouteKey {
  OnBoarding = 'onboarding',
  ChooseName = 'choosename',
}

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="onboarding">
      <Stack.Screen name={RouteKey.OnBoarding} component={OnBoarding} />
      <Stack.Screen name={RouteKey.ChooseName} component={ChooseName} />
    </Stack.Navigator>
  );
};
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
