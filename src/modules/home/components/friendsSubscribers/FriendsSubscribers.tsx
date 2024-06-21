import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View, ActivityIndicator} from 'react-native';
import {getUsersFollowers, getUsersFollowings} from '../../api';
import {CardFollow} from '../../../core/components/cardFollow/CardFollow.tsx';
import {RouteKey} from '../../../core/typing/enums';
import {useNavigation} from '@react-navigation/native';

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

export const FriendsSubscribers = () => {
  const navigation: any = useNavigation();
  const [followings, setFollowings] = useState<Following[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsersFollowers();
        setFollowings(data);
      } catch (error) {
        console.error('Error fetching followings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={'#4E9FFF'} />
        </View>
      )}
      {followings.map((user, index) => (
        <View key={user.id}>
          <CardFollow
            id={user.id}
            name={
              user.nickname ||
              `${user.name ?? ''} ${user.surname ?? ''}`.trim() ||
              user.email
            }
            onViewProfile={() =>
              navigation.navigate(RouteKey.SearchPeopleAcc, {id: user.id})
            }
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
