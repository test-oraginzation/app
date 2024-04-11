import React from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {Text, View} from 'react-native';
import HeaderHome from '../../components/headerHome/headerHome.tsx';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <HeaderHome />
      <PrimeryWrapper>
        <Text>asdasdad</Text>
      </PrimeryWrapper>
    </View>
  );
};

export default HomeScreen;
