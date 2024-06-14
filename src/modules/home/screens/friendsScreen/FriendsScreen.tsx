import React, {useState} from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {View} from 'react-native';
import {HeaderSearch} from '../../components/headerSearch/HeaderSearch.tsx';
import {FriendsSubscribers} from '../../components/friendsSubscribers/FriendsSubscribers.tsx';
import {FriendsSubscriptions} from '../../components/friendsSubscriptions/FriendsSubscriptions.tsx';
import {useSession} from '../../../../hooks/useSession.ts';
import PrimaryButton from '../../../core/components/primaryButton/PrimaryButton.tsx';

const FriendsScreen = () => {
  const [selectedOption, setSelectedOption] = useState<
    'Subscribers' | 'Subscriptions'
  >('Subscribers');
  const {accessToken} = useSession();

  const handleSwitchChange = (value: 'Subscribers' | 'Subscriptions') => {
    setSelectedOption(value);
  };
  const toggleComponent = () => {
    console.log('Component toggled');
  };
  return (
    <View style={{flex: 1}}>
      <HeaderSearch
        onValueChange={handleSwitchChange}
        toggleComponent={toggleComponent}
      />
      <PrimeryWrapper>
        {selectedOption === 'Subscribers' ? (
          <FriendsSubscribers />
        ) : (
          <FriendsSubscriptions />
        )}
      </PrimeryWrapper>
      <PrimaryButton
        label={'log TOKEN'}
        onPress={() => {
          console.log(accessToken);
        }}
      />
    </View>
  );
};

export default FriendsScreen;
