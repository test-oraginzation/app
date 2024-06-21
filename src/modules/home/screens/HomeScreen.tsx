import React, {useState} from 'react';
import PrimeryWrapper from '../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {StyleSheet, Text, View} from 'react-native';
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
        {/*<SwitchButton onValueChange={handleSwitchChange} />*/}
        {/*{selectedOption === 'Lists' ? <List /> : <Wish />}*/}
        <View style={styles.buttonD}>
          <Text style={styles.textM}>Wish</Text>
        </View>
        <Wish />
      </PrimeryWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonD: {
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    width: '100%',
    backgroundColor: '#CEECFD',
    borderColor: '#4E9FFF',
    borderWidth: 1,
    borderRadius: 50,
  },
  textM: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#4E9FFF',
  },
});
export default HomeScreen;
