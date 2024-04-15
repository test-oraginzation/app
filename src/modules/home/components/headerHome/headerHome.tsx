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
    <View style={stules.headerHome}>
      <View style={stules.miniContainerfirst}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            source={require('../../../../assets/images/auth.png')}
            style={stules.profilePicture}
          />
          <View>
            <Text style={stules.mainText}>Good morning</Text>
            {user && <Text style={stules.secondaryText}>{user.nickname}</Text>}
          </View>
        </View>
        <SearchButton onPress={() => {}} style={{}} />
      </View>
      <View style={stules.miniContainersecond}>
        <View style={stules.textContainer}>
          <Text style={stules.buttonText}>
            {subscribers && (
              <Text style={stules.secondaryText}>{subscribers}</Text>
            )}
          </Text>
          <Text style={stules.smalText}>Subscribers</Text>
        </View>
        <View style={stules.stick} />
        <View style={stules.textContainer}>
          <Text style={stules.buttonText}>
            {subscriptions && (
              <Text style={stules.secondaryText}>{subscriptions}</Text>
            )}
          </Text>
          <Text style={stules.smalText}>Subscriptions</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderHome;

const stules = StyleSheet.create({
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
    height: 30,
    width: 1,
    backgroundColor: 'black',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
