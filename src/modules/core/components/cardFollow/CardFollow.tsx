import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import PrimeryWrapper from '../primeryWrapper/PrimeryWrapper.tsx';

export const CardFollow = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../../../../assets/images/testphoto.png')}
          style={styles.images}
        />
        <Text style={styles.text}>Name</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxText}>Tracked</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
  },
  images: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  boxText: {
    color: '#4E9FFF',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 30,
    borderRadius: 8,
    backgroundColor: 'white',
  },
});
