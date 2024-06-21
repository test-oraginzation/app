import React, {useEffect, useState, useCallback} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import HomePageMainContentEmpty from '../homePageMainContentEmpty/HomePageMainContentEmpty.tsx';
import {deleteWish, wishesResponse} from '../../api';
import {WishDataItem} from '../../api/interface.ts';
import {formatDate} from './formatDate.ts';
import {WishCard} from './wishCard/WishCard.tsx';
import {useFocusEffect} from '@react-navigation/native';
const Wish = () => {
  const [wishes, setWishes] = useState<WishDataItem[]>([]);

  const fetchData = async () => {
    try {
      const wishesData = await wishesResponse();
      setWishes(wishesData.items);
      console.log('Payload:', JSON.stringify(wishesData, null, 2));
    } catch (err) {
      console.error('Error fetching wishes:', err);
    }
  };

  const deleteWishes = async (id: number) => {
    console.log(id);
    try {
      const data = await deleteWish(id);
      console.log(data);
      fetchData();
    } catch (err) {
      console.log(err);
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
              <View key={wish.id}>
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
                  id={wish.id}
                  name={wish.name}
                  price={wish.price}
                  url={wish.url}
                  photoUrl={require('../../../../assets/images/testphoto.png')}
                  onDelete={deleteWishes}
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
    paddingHorizontal: 12,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginTop: 24,
  },
  line: {
    width: '35%',
    height: 2,
    backgroundColor: '#CEDAE6',
  },
});
