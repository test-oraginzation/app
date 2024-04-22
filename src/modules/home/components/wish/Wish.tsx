import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import HomePageMainContentEmpty from '../homePageMainContentEmpty/HomePageMainContentEmpty.tsx';
import {Icon} from '../../../core/components/icons/iconsComponents.tsx';
import {wishesResponse} from '../../api';
import {WishData} from '../../api/interface.ts';
import {formatDate} from './formatDate.ts';

const Wish = () => {
  const [wishes, setWishes] = useState<WishData[]>([]);
  const fetchData = async () => {
    try {
      const wishesData = await wishesResponse();
      setWishes(wishesData);
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.cards}>
        {wishes.length === 0 ? (
          <HomePageMainContentEmpty />
        ) : (
          wishes
            .slice()
            .reverse()
            .sort(
              (a, b) =>
                new Date(b.createdDate).getTime() -
                new Date(a.createdDate).getTime(),
            )
            .map((wish, index, array) => (
              <View key={index}>
                {(index === 0 ||
                  formatDate(wish.createdDate) !==
                    formatDate(array[index - 1].createdDate)) && (
                  <View style={styles.dateContainer}>
                    <View style={styles.line} />
                    <Text style={styles.dateText}>
                      {formatDate(wish.createdDate)}
                    </Text>
                    <View style={styles.line} />
                  </View>
                )}
                <View style={styles.card}>
                  <Image
                    source={require('../../../../assets/images/testphoto.png')}
                    style={styles.img}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.mainText}>{wish.name}</Text>
                    <Text style={styles.secondaryText}>{wish.price} USD</Text>
                    <Text style={styles.linkText}>{wish.url}</Text>
                  </View>
                  <View style={styles.iconContainer}>
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
                  </View>
                </View>
              </View>
            ))
        )}
      </View>
    </ScrollView>
  );
};

export default Wish;

const styles = StyleSheet.create({
  cards: {
    marginTop: 8,
  },
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
  dateText: {
    color: '#4E9FFF',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
  line: {
    width: 100,
    height: 2,
    backgroundColor: 'black',
  },
});
