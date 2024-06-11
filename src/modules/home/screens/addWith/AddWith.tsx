import React, {useState} from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SearchButton from '../../components/smallAuxiliaryButton/SmallAuxiliaryButton.tsx';
import PrimaryInput from '../../../core/components/primaryInput/PrimaryInput.tsx';
import PrimaryButton from '../../../core/components/primaryButton/PrimaryButton.tsx';
import DropDownPicker from '../../../core/components/dropDownPicker/DropDownPicker.tsx';
import MultilineTextInput from '../../../core/components/multilineTextInput/MultilineTextInput.tsx';
import {checkEmptyStrings} from '../../../core/functions';
import {ToggleButton} from '../../../core/components/toggleButton/ToggleButton.tsx';
import {addWishReq} from '../../api';
import {useNavigation} from '@react-navigation/native';

const AddWith = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [addWishError, setAddWishError] = useState('');

  const navigation = useNavigation();

  const addWish = async () => {
    try {
      const data = await addWishReq({
        name,
        currency,
        price: parseFloat(price),
        url,
        description,
        private: isPrivate,
      });
      if (data.status === 201) {
        navigation.goBack();
        Alert.alert('successfully created');
      }
    } catch (error) {
      console.error('Error:', error);
      {
        error ? setAddWishError('enter all data') : null;
      }
    }
  };
  const handleToggle = (isEnabled: boolean) => {
    setIsPrivate(isEnabled);
  };

  const handleCurrencyChange = (value: string) => {
    setCurrency(value);
  };

  return (
    <PrimeryWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.photoContainer}>
          <TouchableOpacity style={styles.photoBtnContainer}>
            <Image
              source={require('../../../../assets/images/addwith.png')}
              style={styles.profilePicture}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginBottom: 40}}>
          <View style={{marginBottom: 24}}>
            <Text style={styles.lableMain}>Name with</Text>
            <PrimaryInput
              value={name}
              onChangeText={setName}
              placeholder={'Enter with name'}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 13,
                width: '100%',
                height: 50,
              }}
            />
          </View>
          <View style={styles.wrapperPriceCurrency}>
            <View style={{marginBottom: 24}}>
              <Text style={styles.lableMain}>Price</Text>
              <PrimaryInput
                keyboardType={'numeric'}
                value={price}
                onChangeText={setPrice}
                placeholder={'Price'}
                style={{
                  paddingHorizontal: 16,
                  paddingVertical: 13,
                  height: 50,
                  width: 164,
                }}
              />
            </View>
            <View style={{marginBottom: 24}}>
              <Text style={styles.lableMain}>Currency</Text>
              <DropDownPicker
                items={[
                  {label: 'USD', value: 'USD'},
                  {label: 'EUR', value: 'EUR'},
                  {label: 'UAH', value: 'UAH'},
                ]}
                onValueChange={handleCurrencyChange}
              />
            </View>
          </View>
          <View style={{marginBottom: 24}}>
            <Text style={styles.lableMain}>URL</Text>
            <PrimaryInput
              value={url}
              onChangeText={setUrl}
              placeholder={'Add website URL'}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 13,
                width: '100%',
                height: 50,
              }}
            />
          </View>
          <View style={{marginBottom: 24}}>
            <Text style={styles.lableMain}>Description</Text>
            <MultilineTextInput
              value={description}
              onChangeText={setDescription}
              placeholder={'Enten a description'}
              style={{
                paddingHorizontal: 16,
                paddingTop: 13,
                width: '100%',
                height: 100,
              }}
            />
          </View>
          <View>
            <ToggleButton
              text={'Hide wishes from other users'}
              onToggle={handleToggle}
            />
          </View>
        </View>
        <View style={styles.containerForButton}>
          {addWishError ? (
            <Text
              style={{
                color: 'red',
                textAlign: 'center',
                marginBottom: 10,
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                position: 'absolute',
                bottom: 65,
              }}>
              server error
            </Text>
          ) : null}
          <PrimaryButton
            label={'Add a wish'}
            onPress={() => {
              addWish();
            }}
            style={{
              marginBottom: 16,
            }}
            isDesable={checkEmptyStrings(
              name,
              price,
              url,
              price,
              currency,
              description,
            )}
          />
        </View>
      </ScrollView>
    </PrimeryWrapper>
  );
};

export default AddWith;

const styles = StyleSheet.create({
  photoContainer: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 65 : 34,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoBtnContainer: {
    width: 106,
  },
  iconBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  profilePicture: {
    height: 106,
    width: 106,
  },
  containerForButton: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 16,
  },
  lableMain: {
    color: '#514F50',
    marginBottom: 8,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  wrapperPriceCurrency: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 12,
    elevation: Platform.OS === 'android' ? 50 : 0,
  },
});
