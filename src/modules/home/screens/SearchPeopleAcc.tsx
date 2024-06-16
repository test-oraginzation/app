import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import {getUsersId, getUsersIdFollowers, getUsersIdFollowings} from '../api';
import {User} from '../api/interface.ts';
import PrimeryWrapper from '../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import SwitchButton from '../components/switchButton/SwitchButton.tsx';
import {UsersList} from '../components/usersList/UsersList.tsx';
import {UsersWish} from '../components/userWish/UsersWish.tsx';

interface SearchPeopleAccProps {
  route: {
    params: {
      id: number;
    };
  };
}

export const SearchPeopleAcc: React.FC<SearchPeopleAccProps> = ({route}) => {
  const [subscribers, setSubscribers] = useState<number | null>(null);
  const [subscriptions, setSubscriptions] = useState<number | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState<'Lists' | 'Wish'>(
    'Lists',
  );
  const {id} = route.params;
  const handleSwitchChange = (value: 'Lists' | 'Wish') => {
    setSelectedOption(value);
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUsersId(id);
        const followings = await getUsersIdFollowings(id);
        const followers = await getUsersIdFollowers(id);
        setUser(data);
        setSubscriptions(followings);
        setSubscribers(followers);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [id]);

  return (
    <>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={'#4E9FFF'} />
        </View>
      )}
      <View style={styles.headerHome}>
        <View style={styles.miniContainerfirst}>
          <Image
            source={require('../../../assets/images/addwith.png')}
            style={styles.profilePicture}
          />
          <View style={styles.containerName}>
            <Text style={styles.mainText}>{user?.name}</Text>
            <Text style={[styles.mainText, {marginLeft: 8}]}>
              {user?.surname}
            </Text>
          </View>
        </View>
        <View style={styles.miniContainersecond}>
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>{subscribers}</Text>
            <Text style={styles.smalText}>Subscribers</Text>
          </View>
          <View style={styles.stickContainer}>
            <View style={styles.stick} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>{subscriptions}</Text>
            <Text style={styles.smalText}>Subscriptions</Text>
          </View>
        </View>
      </View>
      <PrimeryWrapper>
        <SwitchButton onValueChange={handleSwitchChange} />
        {selectedOption === 'Lists' ? <UsersList /> : <UsersWish id={id} />}
      </PrimeryWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  containerName: {
    flexDirection: 'row',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    marginTop: 45,
  },
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
    flexDirection: 'row',
    marginHorizontal: 16,
    alignItems: 'center',
  },
  miniContainersecond: {
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
