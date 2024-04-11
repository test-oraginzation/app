import React from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {Text, View} from 'react-native';
import PrimaryButton from '../../../core/components/primaryButton/PrimaryButton.tsx';
import {Icon} from '../../../core/components/icons/iconsComponents.tsx';
import HeaderHome from '../../components/headerHome/headerHome.tsx';
interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
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
