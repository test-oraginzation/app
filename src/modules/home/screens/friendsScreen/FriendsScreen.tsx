import React, {useState} from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {View} from 'react-native';
import {HeaderSearch} from '../../components/headerSearch/HeaderSearch.tsx';
import {FriendsSubscribers} from '../../components/friendsSubscribers/FriendsSubscribers.tsx';
import {FriendsSubscriptions} from '../../components/friendsSubscriptions/FriendsSubscriptions.tsx';

const FriendsScreen = () => {
  const [selectedOption, setSelectedOption] = useState<
    'Subscribers' | 'Subscriptions'
  >('Subscribers');

  const handleSwitchChange = (value: 'Subscribers' | 'Subscriptions') => {
    setSelectedOption(value);
  };
  return (
    <View style={{flex: 1}}>
      <HeaderSearch onValueChange={handleSwitchChange} />
      <PrimeryWrapper>
        {selectedOption === 'Subscribers' ? (
          <FriendsSubscribers />
        ) : (
          <FriendsSubscriptions />
        )}
      </PrimeryWrapper>
    </View>
  );
};

export default FriendsScreen;
