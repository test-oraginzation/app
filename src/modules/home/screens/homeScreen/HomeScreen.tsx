import React from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {Text} from 'react-native';
import axiosInstance from '../../../../api/axiosInstance.ts';
import PrimaryButton from "../../../core/components/primaryButton/PrimaryButton.tsx";
import PrimaryInput from "../../../core/components/primaryInput/PrimaryInput.tsx";
import {registrationReq} from "../../../auth/api";
import {putTest} from "../../api";
interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const name = 'sdf';
  return (
    <PrimeryWrapper>
      <Text>HomeScreen</Text>
      <PrimaryButton
        isDesable={false}
        style={{
          marginBottom: 16,
        }}
        label={'Register'}
        onPress={() => {
          putTest(name);
        }}
      />
    </PrimeryWrapper>
  );
};

export default HomeScreen;
