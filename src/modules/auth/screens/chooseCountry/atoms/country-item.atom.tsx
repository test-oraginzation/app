import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  name: string;
  flag: string;
  onPress: () => void;
}
export const CountryItemAtom = ({name, flag, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.txt}>
        {flag} {name}
      </Text>
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#CEDAE6',
          marginTop: 13,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    height: 50,
    justifyContent: 'center',
  },
  txt: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#000000',
  },
});
