import React, {useState} from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {Text, View} from 'react-native';
import HeaderHome from '../../components/headerHome/headerHome.tsx';
import SwitchButton from '../../components/switchButton/SwitchButton.tsx';
import HomePageMainContentEmpty from '../../components/homePageMainContentEmpty/HomePageMainContentEmpty.tsx';
import List from "../../components/list/List.tsx";
import Wish from "../../components/wish/Wish.tsx";

const HomeScreen = () => {
  const [selectedOption, setSelectedOption] = useState<'Lists' | 'Wish'>(
    'Lists',
  );

  const handleSwitchChange = (value: 'Lists' | 'Wish') => {
    setSelectedOption(value);
  };

  return (
    <View style={{flex: 1}}>
      <HeaderHome />
      <PrimeryWrapper>
        <SwitchButton onValueChange={handleSwitchChange} />
        {selectedOption === 'Lists' ? <List /> : <Wish />}
      </PrimeryWrapper>
    </View>
  );
};

export default HomeScreen;
