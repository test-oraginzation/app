import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../home/screens/homeScreen/HomeScreen.tsx';
import {RouteKey} from '../../core/typing/enums';
import SkipChoosePhoto from '../components/SkipChoosePhoto.tsx';
import ChoosePhoto from '../../home/screens/choosePhoto/ChoosePhoto.tsx';

const Stack = createNativeStackNavigator();

const User = () => {
  return (
    <Stack.Navigator
      initialRouteName="homescreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={RouteKey.ChoosePhoto}
        component={ChoosePhoto}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
          headerRight: () => <SkipChoosePhoto />,
        }}
      />
      <Stack.Screen name={RouteKey.HomeScreen} component={HomeScreen} />
    </Stack.Navigator>
  );
};
export default User;
