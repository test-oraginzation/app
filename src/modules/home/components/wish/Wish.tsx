import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import HomePageMainContentEmpty from '../homePageMainContentEmpty/HomePageMainContentEmpty.tsx';
import {Icon} from '../../../core/components/icons/iconsComponents.tsx';
import {wishesResponse} from '../../api';
import {WishData} from "../../api/interface.ts";

const Wish = () => {
  const [wishes, setWishes] = useState<WishData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const wishesData = await wishesResponse();
        setWishes(wishesData); // Set the wishes array received from the API
      } catch (error) {
        console.log('error', error);
      }
    };
    //TODO доробити
    fetchData();
  }, []);

  return (
    <View style={styles.cards}>
      {wishes.length === 0 ? (
        <HomePageMainContentEmpty />
      ) : (
        wishes.map((wish, index) => (
          <View style={styles.card} key={index}>
            <Image
              source={require('../../../../assets/images/testphoto.png')}
              style={styles.img}
            />
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>{wish.name}</Text>{' '}
              <Text style={styles.secondaryText}>{wish.price} USD</Text>{' '}
              <Text style={styles.linkText}>{wish.link}</Text>{' '}
            </View>
            <Icon
              name={'dots'}
              style={{
                position: 'absolute',
                top: 12,
                left: 105,
              }}
              size={16}
              onPress={() => {}}
            />
            <Icon
              name={'copy-icon'}
              size={22}
              color={'#4E9FFF'}
              onPress={() => {}}
              style={{
                transform: [{scaleX: -1}],
                position: 'absolute',
                bottom: 12,
                left: 103,
              }}
            />
          </View>
        ))
      )}
    </View>
  );
};

export default Wish;

const styles = StyleSheet.create({
  cards: {},
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
});
