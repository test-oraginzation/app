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
import {getWishes} from '../../api';
import {Wish} from '../../api/interface.ts';

interface WishListProps {
  search: string;
}

export const WishList: React.FC<WishListProps> = ({search}) => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWishData = async () => {
      setLoading(true);
      try {
        const data = await getWishes(search);
        setWishes(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getWishData();
  }, [search]);

  const handlePress = (id: number) => {
    console.log('Wish ID:', id);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={'#4E9FFF'} />
        </View>
      )}
      {!loading && wishes.length === 0 && (
        <View style={styles.loadingOverlay}>
          <Text>No wishes found</Text>
        </View>
      )}
      {wishes.map((wish, index) => (
        <React.Fragment key={wish.id}>
          <View style={styles.containerCardMain}>
            <View style={styles.containerCard}>
              <Image
                source={require('../../../../assets/images/addwith.png')}
                style={styles.image}
              />
              <Text style={styles.textName}>{wish.name}</Text>
            </View>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => handlePress(wish.id)}
              style={styles.button}>
              <Text style={styles.buttonText}>Subscribe</Text>
            </TouchableOpacity>
          </View>
          {index < wishes.length - 1 && <View style={styles.line} />}
        </React.Fragment>
      ))}
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
