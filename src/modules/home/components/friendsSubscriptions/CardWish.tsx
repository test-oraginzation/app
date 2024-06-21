import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

interface CardWishProps {
  id: number;
  name: string;
  onViewProfile?: (id: number) => void;
  onFollowAction?: (id: number) => void;
}

export const CardWish: React.FC<CardWishProps> = ({
  id,
  name,
  onViewProfile,
  onFollowAction,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onViewProfile(id)}
      style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../../../../assets/images/Friend.png')}
          style={styles.images}
        />
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onFollowAction(id)}>
          <Text style={styles.buttonText}>Unsubscribe</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 30,
    borderRadius: 8,
    backgroundColor: '#4E9FFF',
    marginLeft: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
});
