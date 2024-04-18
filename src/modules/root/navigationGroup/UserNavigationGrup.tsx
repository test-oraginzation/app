import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../home/screens/homeScreen/HomeScreen.tsx';
import {RouteKey} from '../../core/typing/enums';
import SkipChoosePhoto from '../components/SkipChoosePhoto.tsx';
import ChoosePhoto from '../../home/screens/choosePhoto/ChoosePhoto.tsx';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../../home/screens/searchScreen/SearchScreen.tsx';
import SettingScreen from '../../home/screens/settingScreen/SettingScreen.tsx';
import FriendsScreen from '../../home/screens/friendsScreen/FriendsScreen.tsx';
import TabButton from '../components/TabButton.tsx';
import {TabBarWidget} from '../widgets';
import AddWith from '../../home/screens/addWith/AddWith.tsx';
import GoBack from '../components/GoBack.tsx';

const TabStack = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigationGroup = () => {
  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({state, navigation}) => (
        <TabBarWidget state={state} navigate={navigation.navigate} />
      )}>
      <TabStack.Screen name={RouteKey.Home} component={HomeScreen} />
      <TabStack.Screen name={RouteKey.Friends} component={FriendsScreen} />
      <TabStack.Screen name={RouteKey.TabButton} component={TabButton} />
      <TabStack.Screen name={RouteKey.Search} component={SearchScreen} />
      <TabStack.Screen name={RouteKey.Settings} component={SettingScreen} />
    </TabStack.Navigator>
  );
};
export const UserNavigationGroup = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteKey.Home}
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
      <Stack.Screen
        name={RouteKey.AddWith}
        component={AddWith}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: 'Add with',
          headerLeft: () => <GoBack />,
        }}
      />
    </Stack.Navigator>
  );
};
