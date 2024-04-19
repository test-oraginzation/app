import React from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {Text} from 'react-native';
import PrimaryButton from '../../../core/components/primaryButton/PrimaryButton.tsx';
import {removeItem} from '../../../core/services/storage.services.ts';
import {SessionType} from '../../../core/typing/enums';
import {useToken} from '../../../../hooks/auth.ts';

const SettingScreen = () => {
  const {handleLogout, accessToken} = useToken();
  const delToken = async () => {
    await handleLogout();
    console.log('accessToken', accessToken);
  };
  return (
    <PrimeryWrapper>
      <Text>delete token</Text>
      <PrimaryButton label={'delete token'} onPress={delToken} />
    </PrimeryWrapper>
  );
};

export default SettingScreen;
