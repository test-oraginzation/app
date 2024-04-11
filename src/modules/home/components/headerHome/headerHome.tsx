import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SearchButton from './atom/SearchButton.tsx';

const HeaderHome = () => {
  return (
    <View style={stules.headerHome}>
      <View style={stules.miniContainer}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            source={require('../../../../assets/images/auth.png')}
            style={stules.profilePicture}
          />
          <View>
            <Text style={stules.mainText}>Good morning</Text>
            <Text style={stules.secondaryText}>Jennifer!</Text>
          </View>
        </View>
        <SearchButton onPress={() => {}} style={{}} />
      </View>
      <View style={stules.miniContainer}>
        <View>
          <Text style={stules.buttonText}>55</Text>
          <Text style={stules.smalText}>Subscribers</Text>
        </View>
        <View style={}/>
        <View>
          <Text style={stules.buttonText}>55</Text>
          <Text style={stules.smalText}>Subscriptions</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderHome;

const stules = StyleSheet.create({
  mainText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 26,
    color: 'black',
  },
  secondaryText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: 'black',
    marginTop: 2,
  },
  miniContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 16,
    alignItems: 'center',
  },
  profilePicture: {
    height: 64,
    width: 64,
    marginRight: 12,
  },
  headerHome: {
    backgroundColor: 'white',
    paddingTop: 70,
    height: 222,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  smalText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: 'black',
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: 'black',
  },
  stick: {
    height: 30,
    width: 1,
    backgroundColor: 'black',
  },
});
