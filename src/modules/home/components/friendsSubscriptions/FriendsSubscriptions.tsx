import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';
import {
  getUsersFollowers,
  getUsersFollowings,
  usersUnFollowings,
} from '../../api';
import {CardFollow} from '../../../core/components/cardFollow/CardFollow.tsx';
import {RouteKey} from '../../../core/typing/enums';
import {useNavigation} from '@react-navigation/native';
import {CardWish} from './CardWish.tsx';

interface Following {
  id: number;
  name: string | null;
  surname: string | null;
  nickname: string;
  email: string;
  phone: string | null;
  birthday: string | null;
  photo: string | null;
  gender: string | null;
  country: string;
  updatedDate: string;
  createdDate: string;
}

export const FriendsSubscriptions = () => {
  const navigation: any = useNavigation();
  const [followings, setFollowings] = useState<Following[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await getUsersFollowings();
      setFollowings(data);
    } catch (error) {
      console.error('Error fetching followings:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const unFollow = async (id: number) => {
    try {
      await usersUnFollowings(id);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={'#4E9FFF'} />
        </View>
      )}
      {followings.map((user, index) => (
        <View key={user.id}>
          <CardWish
            id={user.id}
            name={
              user.nickname ||
              `${user.name ?? ''} ${user.surname ?? ''}`.trim() ||
              user.email
            }
            onViewProfile={() =>
              navigation.navigate(RouteKey.SearchPeopleAcc, {id: user.id})
            }
            onFollowAction={() => unFollow(user.id)}
          />
          {index < followings.length - 1 && <View style={styles.line} />}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#CEDAE6',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    marginTop: 45,
  },
});
