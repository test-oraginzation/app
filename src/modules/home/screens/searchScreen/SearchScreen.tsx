import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {HeaderSearchAccWish} from '../../components/headerSearchAccWish/HeaderSearchAccWish.tsx';
import PrimaryInput from "../../../core/components/primaryInput/PrimaryInput.tsx";
import PrimeryWrapper from "../../../core/components/primeryWrapper/PrimeryWrapper.tsx";

const SearchScreen = () => {
  const [selectedItem, setSelectedItem] = useState<'Accounts' | 'Wish'>('Accounts');

  const handleSwitch = (value: 'Accounts' | 'Wish') => {
    setSelectedItem(value);
  };

  const toggleComponent = () => {
    console.log('Component toggled');
  };

  return (
    <View style={{flex: 1}}>
      <HeaderSearchAccWish
        toggleComponent={toggleComponent}
        onValueChange={handleSwitch}
      />
      <PrimeryWrapper>
        <ScrollView showsVerticalScrollIndicator={false}>
          {selectedItem === 'Accounts' ? (
            <Text>Accounts</Text>
          ) : (
            <Text>Wish</Text>
          )}
          <Text>asd</Text>
        </ScrollView>
      </PrimeryWrapper>
    </View>
  );
};


export default SearchScreen;
