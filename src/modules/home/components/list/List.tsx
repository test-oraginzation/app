import React from 'react';
import {Text, View} from 'react-native';
import HomePageMainContentEmpty from '../homePageMainContentEmpty/HomePageMainContentEmpty.tsx';
const List = () => {
  return <View>{true ? <HomePageMainContentEmpty /> : <Text>asd</Text>}</View>;
};

export default List;
