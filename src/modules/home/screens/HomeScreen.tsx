import React, {useState} from 'react';
import PrimeryWrapper from '../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {Text, View} from 'react-native';
import HeaderMain from '../components/headerMain/headerMain.tsx';
import SwitchButton from '../components/switchButton/SwitchButton.tsx';
import List from '../components/list/List.tsx';
import Wish from '../components/wish/Wish.tsx';
import {HeaderSearch} from '../components/headerSearch/HeaderSearch.tsx';
import {useNavigation} from '@react-navigation/native';
import {RouteKey} from '../../core/typing/enums';

const HomeScreen = () => {
  const navigation: any = useNavigation();
  const [selectedOption, setSelectedOption] = useState<'Lists' | 'Wish'>(
    'Lists',
  );
  const toggleComponent = () => {
    navigation.navigate(RouteKey.Search);
  };
  const handleSwitchChange = (value: 'Lists' | 'Wish') => {
    setSelectedOption(value);
  };
  return (
    <View style={{flex: 1}}>
      <HeaderMain toggleComponent={toggleComponent} />
      <PrimeryWrapper>
        <SwitchButton onValueChange={handleSwitchChange} />
        {selectedOption === 'Lists' ? <List /> : <Wish />}
      </PrimeryWrapper>
    </View>
  );
};

export default HomeScreen;
