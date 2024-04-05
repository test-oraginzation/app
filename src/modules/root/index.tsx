import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import OnBoarding from '../auth/screens/onBoarding/OnBoarding.tsx';
import ChooseNamePass from '../auth/screens/chooseNamePass/ChooseNamePass.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChooseCountry from '../auth/screens/chooseCountry/ChooseCountry.tsx';
import ChoosePhoto from '../auth/screens/choosePhoto/ChoosePhoto.tsx';
import GoBack from './components/GoBack.tsx';

const Stack = createNativeStackNavigator();

enum RouteKey {
  OnBoarding = 'onboarding',
  ChooseName = 'choosename',
  ChooseCountry = 'choosecountry',
  ChoosePhoto = 'choosephoto',
}
const Auth = () => {
  return (
    <Stack.Navigator
      initialRouteName="onboarding"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={RouteKey.OnBoarding} component={OnBoarding} />
      <Stack.Screen
        name={RouteKey.ChooseCountry}
        component={ChooseCountry}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => <GoBack />,
        }}
      />
      <Stack.Screen
        name={RouteKey.ChooseName}
        component={ChooseNamePass}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => <GoBack />,
        }}
      />
      <Stack.Screen
        name={RouteKey.ChoosePhoto}
        component={ChoosePhoto}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => <GoBack />,
        }}
      />
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
