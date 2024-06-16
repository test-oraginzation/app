import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {UserPageContentEmpty} from '../userPageContentEmpty/UserPageContentEmpty.tsx';

export const UsersList = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>{true ? <UserPageContentEmpty /> : <Text>asd</Text>}</View>
    </ScrollView>
  );
};
