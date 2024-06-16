import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {getUsers} from '../../api';
import {UserListProps} from '../../api/interface.ts';
import {useNavigation} from '@react-navigation/native';
import {RouteKey} from '../../../core/typing/enums';

interface UserListProp {
  search: string;
}

export const UserList: React.FC<UserListProp> = ({search}) => {
  const [users, setUsers] = useState<UserListProps | null>(null);
  const [loading, setLoading] = useState(true);
  const navigation: any = useNavigation();

  useEffect(() => {
    const getUserData = async () => {
      setLoading(true);
      try {
        const data = await getUsers(search);
        setUsers(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getUserData();
  }, [search]);

  const handlePress = (id: number) => {
    console.log('User ID:', id);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={'#4E9FFF'} />
        </View>
      )}
      {users
        ? users.items.map((item, index) => (
            <React.Fragment key={item.id}>
              <TouchableOpacity
                style={styles.containerCardMain}
                onPress={() =>
                  navigation.navigate(RouteKey.SearchPeopleAcc, {id: item.id})
                }>
                <View style={styles.containerCard}>
                  <Image
                    source={require('../../../../assets/images/addwith.png')}
                    style={styles.image}
                  />
                  <Text style={styles.textName}>{item.nickname}</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => handlePress(item.id)}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Subscribe</Text>
                </TouchableOpacity>
              </TouchableOpacity>
              {index < users.items.length - 1 && <View style={styles.line} />}
            </React.Fragment>
          ))
        : !loading && (
            <View style={styles.loadingOverlay}>
              <Text>No users found</Text>
            </View>
          )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    marginTop: 45,
  },
  line: {
    backgroundColor: '#CEDAE6',
    width: '100%',
    height: 1,
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#FFFFFF',
  },
  textName: {
    marginLeft: 12,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#4E9FFF',
    height: 30,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCard: {
    height: 68,
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerCardMain: {
    height: 68,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
});
