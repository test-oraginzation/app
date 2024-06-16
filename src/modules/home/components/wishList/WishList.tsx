import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {getWishes} from '../../api';
import {Wish} from '../../api/interface.ts';
import Clipboard from "@react-native-clipboard/clipboard";

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
        if (Array.isArray(data)) {
          setWishes(data);
        } else {
          setWishes([]);
        }
      } catch (err) {
        console.log(err);
        setWishes([]);
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
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1, paddingTop: 10}}>
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
      {!loading &&
        wishes.map((wish, index) => (
          <React.Fragment key={wish.id}>
            <TouchableOpacity
              onPress={() => {handlePress()}}
              style={styles.containerCardMain}>
              <Image
                source={require('../../../../assets/images/testphoto.png')}
                style={styles.image}
              />
              <View style={styles.containerForText}>
                <View>
                  <Text style={styles.textNamen}>{wish.name}</Text>
                  <Text style={styles.textPrice}>{wish.price}</Text>
                </View>
                <Text style={styles.textPrice}>{wish.url}</Text>
              </View>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.buttonCopy}
                onPress={() => {
                  copy()
                }}>
                <Image
                  source={require('../../../../assets/images/Copy.png')}
                  style={styles.copy}
                />
              </TouchableOpacity>
            </TouchableOpacity>
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
  containerCardMain: {
    height: 112,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    flexDirection: 'row',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 6,
  },
  containerForText: {
    justifyContent: 'space-between',
    marginVertical: 12,
    marginLeft: 6,
  },
  textNamen: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  textPrice: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  icon: {
    position: 'absolute',
    right: 12,
    bottom: 12,
  },
  copy: {
    height: 24,
    width: 24,
  },
  buttonCopy: {
    position: 'absolute',
    right: 12,
    bottom: 12,
  },
});
