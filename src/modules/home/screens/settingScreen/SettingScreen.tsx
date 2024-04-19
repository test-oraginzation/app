import React from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {Text} from 'react-native';
import PrimaryButton from '../../../core/components/primaryButton/PrimaryButton.tsx';
import {useToken} from '../../../../hooks/auth.ts';

const SettingScreen = () => {
  const {handleLogout} = useToken();
  const delToken = async () => {
    await handleLogout();
  };
  return (
    <PrimeryWrapper>
      <Text>delete token</Text>
      <PrimaryButton label={'delete token'} onPress={delToken} />
    </PrimeryWrapper>
  );
};

export default SettingScreen;
