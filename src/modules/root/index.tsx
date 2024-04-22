import React, {useEffect} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './navigationGroup/Auth.tsx';
import {UserNavigationGroup} from './navigationGroup/UserNavigationGrup.tsx';
import {useSession} from '../../hooks/useSession.ts';

const Root = () => {
  const {getTokens, accessToken} = useSession();

  useEffect(() => {
    getTokens();
  }, [getTokens]);
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        {accessToken ? <UserNavigationGroup /> : <Auth />}
        {/*{accessToken || token ? <UserNavigationGroup /> : <Auth />}*/}
        {/*<UserNavigationGroup />*/}
        {/*<Auth />*/}
        {/*<AddWith />*/}
      </NavigationContainer>
    </View>
  );
};

export default Root;
