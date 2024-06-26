import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

interface CardFollowProps {
  id: number;
  name: string;
  onViewProfile?: (id: number) => void;
  onFollowAction?: (id: number) => void;
}

export const CardFollow: React.FC<CardFollowProps> = ({
  id,
  name,
  onViewProfile,
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
          disabled={true}
          style={styles.button}
          onPress={() => onViewProfile && onViewProfile(id)}>
          <Text style={styles.buttonText}>Tracked</Text>
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
    width: 80,
    height: 30,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginLeft: 10,
  },
  buttonText: {
    color: '#4E9FFF',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
});
