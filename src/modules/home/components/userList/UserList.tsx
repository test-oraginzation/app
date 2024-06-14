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

export const UserList = () => {
  const [users, setUsers] = useState<UserListProps | null>(null);
  const [loading, setLoading] = useState(true);

  const getUserData = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

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
      {users ? (
        users.items.map((item, index) => (
          <React.Fragment key={item.id}>
            <View style={styles.containerCardMain}>
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
            </View>
            {index < users.items.length - 1 && <View style={styles.line} />}
          </React.Fragment>
        ))
      ) : (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={'#4E9FFF'} />
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
    marginTop: 50,
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
