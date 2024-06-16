import React, {useState} from 'react';
import PrimeryWrapper from '../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {Text, View} from 'react-native';
import HeaderMain from '../components/headerMain/headerMain.tsx';
import SwitchButton from '../components/switchButton/SwitchButton.tsx';
import List from '../components/list/List.tsx';
import Wish from '../components/wish/Wish.tsx';
import {HeaderSearch} from "../components/headerSearch/HeaderSearch.tsx";

const HomeScreen = () => {
  const [selectedOption, setSelectedOption] = useState<'Lists' | 'Wish'>(
    'Lists',
  );
  const [selectedItem, setSelectedItem] = useState<
    'Subscribers' | 'Subscriptions'
  >('Subscribers');

  const [showComponentA, setShowComponentA] = useState(true);
  const toggleComponent = () => {
    setShowComponentA(!showComponentA);
  };
  const handleSwitchChange = (value: 'Lists' | 'Wish') => {
    setSelectedOption(value);
  };
  const handleSwitch = (value: 'Subscribers' | 'Subscriptions') => {
    setSelectedItem(value);
  };
  return (
    <View style={{flex: 1}}>
      {showComponentA ? (
        <HeaderMain toggleComponent={toggleComponent} />
      ) : (
        <HeaderSearch
          toggleComponent={toggleComponent}
          onValueChange={handleSwitch}
        />
      )}
      <PrimeryWrapper>
        <SwitchButton onValueChange={handleSwitchChange} />
        {selectedOption === 'Lists' ? <List /> : <Wish />}
      </PrimeryWrapper>
    </View>
  );
};

export default HomeScreen;
