import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import HomePageMainContentEmpty from '../homePageMainContentEmpty/HomePageMainContentEmpty.tsx';
const List = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>{true ? <HomePageMainContentEmpty /> : <Text>asd</Text>}</View>
    </ScrollView>
  );
};

export default List;
