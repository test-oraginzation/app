import React from 'react';
import {View} from 'react-native';
import OnBoarding from '../auth/screens/onBoarding/OnBoarding.tsx';
import ChooseNamePass from '../auth/screens/chooseNamePass/ChooseNamePass.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChooseCountry from '../auth/screens/chooseCountry/ChooseCountry.tsx';

const Stack = createNativeStackNavigator();

enum RouteKey {
  OnBoarding = 'onboarding',
  ChooseName = 'choosename',
  ChooseCountry = 'choosecountry',
}

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="onboarding">
      <Stack.Screen name={RouteKey.OnBoarding} component={OnBoarding} />
      <Stack.Screen name={RouteKey.ChooseName} component={ChooseNamePass} />
      <Stack.Screen name={RouteKey.ChooseCountry} component={ChooseCountry} />
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
