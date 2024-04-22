import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Icon} from '../../../../core/components/icons/iconsComponents.tsx';
interface WishCardProps {
  name: string;
  price: number;
  url: string;
  photoUrl: string;
  onIconPress?: () => void;
}

export const WishCard: React.FC<WishCardProps> = ({
  name,
  price,
  url,
  photoUrl,
  onIconPress,
}) => {
  return (
    <View style={styles.card}>
      <Image source={photoUrl} style={styles.img} />
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>{name}</Text>
        <Text style={styles.secondaryText}>{price} USD</Text>
        <Text style={styles.linkText}>{url}</Text>
      </View>
      <TouchableOpacity onPress={onIconPress} style={styles.iconContainer}>
        <Icon name={'dots'} size={16} onPress={() => {}} />
        <Icon
          name={'copy-icon'}
          size={20}
          color={'#4E9FFF'}
          onPress={() => {}}
          style={{
            position: 'absolute',
            right: -2,
            top: 70,
            transform: [{scaleX: -1}],
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 112,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 8,
    width: '100%',
    flexDirection: 'row',
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 10,
    margin: 6,
  },
  textContainer: {
    marginTop: 12,
    marginLeft: 6,
  },
  mainText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  secondaryText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  linkText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    marginTop: 24,
  },
  iconContainer: {
    position: 'absolute',
    top: 12,
    right: 12,
    flexDirection: 'row',
  },
});
