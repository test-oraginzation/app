import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const UserPageContentEmpty = () => {
  return (
    <View style={stules.container}>
      <Image
        source={require('../../../../assets/images/homeWish.png')}
        style={stules.profilePicture}
      />
      <Text style={stules.buttonText}>This user's wish list is empty</Text>
      <Text style={stules.secondaryText}>
        Create a wish list & Add wishes {'\n'} from any website
      </Text>
    </View>
  );
};

const stules = StyleSheet.create({
  profilePicture: {
    height: 106,
    width: 106,
  },
  container: {
    marginTop: 40,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 24,
  },
  secondaryText: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginTop: 10,
    textAlign: 'center',
  },
});
