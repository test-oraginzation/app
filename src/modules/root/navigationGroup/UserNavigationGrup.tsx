import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../home/screens/homeScreen/HomeScreen.tsx';
import {RouteKey} from '../../core/typing/enums';
import SkipChoosePhoto from '../components/SkipChoosePhoto.tsx';
import ChoosePhoto from '../../home/screens/choosePhoto/ChoosePhoto.tsx';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../../home/screens/searchScreen/SearchScreen.tsx';
import SettingScreen from '../../home/screens/settingScreen/SettingScreen.tsx';
import FriendsScreen from '../../home/screens/friendsScreen/FriendsScreen.tsx';
import {Icon} from '../../core/components/icons/iconsComponents.tsx';
import TabButton from '../components/TabButton.tsx';

const TabStack = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const iconsCofig: any = {
  [RouteKey.Home]: 'home',
  [RouteKey.Friends]: 'vector',
  [RouteKey.Search]: 'search',
  [RouteKey.Settings]: 'setting',
};
const TabNavigationGroup = () => {
  return (
    <TabStack.Navigator
      screenOptions={({route}) => ({
        tabBarLabelStyle: {
          fontFamily: 'Poppins-Medium',
          color: 'black',
          fontSize: 12,
        },
        tabBarStyle: {
          height: 96,
        },
        headerShown: false,
        tabBarIcon: () => (
          <Icon name={iconsCofig[route.name]} size={24} color={'black'} />
        ),
      })}>
      <TabStack.Screen
        name={RouteKey.Home}
        component={HomeScreen}
        options={{tabBarLabel: 'Home'}}
      />
      <TabStack.Screen
        name={RouteKey.Friends}
        component={FriendsScreen}
        options={{tabBarLabel: 'Friends'}}
      />
      <TabStack.Screen
        name={RouteKey.TabButton}
        component={TabButton}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <Icon name={'plus'} size={24} color={'#4E9FFF'} />,
        }}
      />
      <TabStack.Screen
        name={RouteKey.Search}
        component={SearchScreen}
        options={{tabBarLabel: 'Search'}}
      />
      <TabStack.Screen
        name={RouteKey.Settings}
        component={SettingScreen}
        options={{tabBarLabel: 'Setting'}}
      />
    </TabStack.Navigator>
  );
};
export const UserNavigationGroup = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteKey.TabBar}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={RouteKey.TabBar} component={TabNavigationGroup} />
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
    </Stack.Navigator>
  );
};
