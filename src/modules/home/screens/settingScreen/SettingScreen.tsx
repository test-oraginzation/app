import React from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {Text} from 'react-native';
import PrimaryButton from '../../../core/components/primaryButton/PrimaryButton.tsx';
import {useSession} from '../../../../hooks/useSession.ts';

const SettingScreen = () => {
  const {clearSessionTokens} = useSession();
  const delToken = async () => {
    await clearSessionTokens();
  };
  return (
    <PrimeryWrapper>
      <Text>delete token</Text>
      <PrimaryButton label={'delete token'} onPress={delToken} />
    </PrimeryWrapper>
  );
};

export default SettingScreen;
