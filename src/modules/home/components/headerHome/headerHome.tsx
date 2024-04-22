import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import SearchButton from './atom/SearchButton.tsx';
import {fetchUserProfile} from '../../api';

interface User {
  nickname: string;
  followersCount: number;
  followingCount: number;
}

const HeaderHome = () => {
  const [user, setUser] = useState<User | null>(null);
  const [subscribers, setSubscribers] = useState<number | null>(null);
  const [subscriptions, setSubscriptions] = useState<number | null>(null);

  const fetchData = async () => {
    try {
      const userProfile = await fetchUserProfile();
      setUser(userProfile);
      setSubscribers(userProfile.followersCount);
      setSubscriptions(userProfile.followingCount);
    } catch (error) {
      console.error('Помилка отримання даних з сервера:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.headerHome}>
      <View style={styles.miniContainerfirst}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            source={require('../../../../assets/images/auth.png')}
            style={styles.profilePicture}
          />
          <View>
            <Text style={styles.mainText}>Good morning</Text>
            {user && <Text style={styles.secondaryText}>{user.nickname}</Text>}
          </View>
        </View>
        <SearchButton onPress={() => {}} style={{}} />
      </View>
      <View style={styles.miniContainersecond}>
        <View style={styles.textContainer}>
          <Text style={styles.buttonText}>
            {subscribers && (
              <Text style={styles.secondaryText}>{subscribers}</Text>
            )}
          </Text>
          <Text style={styles.smalText}>Subscribers</Text>
        </View>
        <View style={styles.stickContainer}>
          <View style={styles.stick} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.buttonText}>
            {subscriptions && (
              <Text style={styles.secondaryText}>{subscriptions}</Text>
            )}
          </Text>
          <Text style={styles.smalText}>Subscriptions</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  mainText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 26,
    color: 'black',
  },
  secondaryText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: 'black',
    marginTop: 2,
  },
  miniContainerfirst: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 16,
    alignItems: 'center',
  },
  miniContainersecond: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  profilePicture: {
    height: 64,
    width: 64,
    marginRight: 12,
  },
  headerHome: {
    backgroundColor: 'white',
    paddingTop: 70,
    height: 222,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  smalText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: 'black',
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: 'black',
  },
  stick: {
    position: 'relative',
    height: 30,
    width: 1,
    backgroundColor: 'black',
  },
  stickContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '33%',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '33%',
    marginHorizontal: 20,
  },
});
