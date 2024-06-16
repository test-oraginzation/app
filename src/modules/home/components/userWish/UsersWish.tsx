import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {getUsersIdWishes} from '../../api';
import {WishDataItem} from '../../api/interface.ts';
import {formatDate} from './formatDate.ts';
import {WishCard} from '../wish/wishCard/WishCard.tsx';
import {UserPageContentEmpty} from '../userPageContentEmpty/UserPageContentEmpty.tsx';

interface UsersWishProps {
  id: number;
}
export const UsersWish = ({id}: UsersWishProps) => {
  const [wishes, setWishes] = useState<WishDataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const wishesData = await getUsersIdWishes(id);
        setWishes(wishesData.items);
        console.log('Payload:', JSON.stringify(wishesData, null, 2));
      } catch (err) {
        console.error('Error fetching wishes:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {wishes.length === 0 ? (
          <UserPageContentEmpty />
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
