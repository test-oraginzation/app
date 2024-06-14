import React, {useState} from 'react';
import {View} from 'react-native';
import {HeaderSearchAccWish} from '../../components/headerSearchAccWish/HeaderSearchAccWish.tsx';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {UserList} from '../../components/userList/UserList.tsx';
import {WishList} from '../../components/wishList/WishList.tsx';

const SearchScreen = () => {
  const [selectedItem, setSelectedItem] = useState<'Accounts' | 'Wish'>(
    'Accounts',
  );
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
        {selectedItem === 'Accounts' ? <UserList /> : <WishList />}
      </PrimeryWrapper>
    </View>
  );
};

export default SearchScreen;
