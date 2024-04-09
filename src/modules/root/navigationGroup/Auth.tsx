import React from 'react';
import OnBoarding from '../../auth/screens/onBoarding/OnBoarding.tsx';
import ChooseCountry from '../../auth/screens/chooseCountry/ChooseCountry.tsx';
import GoBack from '../components/GoBack.tsx';
import ChooseEmailPass from '../../auth/screens/chooseEmailPass/ChooseEmailPass.tsx';
import SignIn from '../../auth/screens/signIn/SignIn.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteKey} from '../../core/typing/enums';

const Stack = createNativeStackNavigator();

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
        name={RouteKey.ChooseEmailPass}
        component={ChooseEmailPass}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => <GoBack />,
        }}
      />

      <Stack.Screen
        name={RouteKey.SignIn}
        component={SignIn}
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
export default Auth;
