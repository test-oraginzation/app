import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    height: 20,
    alignItems: 'srart',
    justifyContent: 'center',
  },
  txt: {fontSize: 16, color: '#000000'},
});
