import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import HomePageMainContentEmpty from '../homePageMainContentEmpty/HomePageMainContentEmpty.tsx';
import {wishesResponse} from '../../api';
import {WishData} from '../../api/interface.ts';
import {formatDate} from './formatDate.ts';
import {WishCard} from './wishCard/WishCard.tsx';

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
      <View>
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
                <WishCard
                  name={wish.name}
                  price={wish.price}
                  url={wish.url}
                  photoUrl={require('../../../../assets/images/testphoto.png')}
                />
              </View>
            ))
        )}
      </View>
    </ScrollView>
  );
};

export default Wish;

const styles = StyleSheet.create({
  dateText: {
    color: '#4E9FFF',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 16,
    marginTop: 24,
  },
  line: {
    width: 100,
    height: 2,
    backgroundColor: 'black',
  },
});
