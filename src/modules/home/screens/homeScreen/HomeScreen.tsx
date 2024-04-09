import React from 'react';
import PrimeryWrapper from "../../../core/components/primeryWrapper/PrimeryWrapper.tsx";
import {Text} from "react-native";

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) =>  {
  return (
    <PrimeryWrapper>
      <Text>HomeScreen</Text>
    </PrimeryWrapper>
  );
};

export default HomeScreen;
