import React, {useState} from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CountryPicker} from 'react-native-country-codes-picker';
import {CountryItemAtom} from './atoms';
import PrimaryButton from '../../../core/components/primaryButton/PrimaryButton.tsx';
import {name} from 'axios';

interface CountryModalProps {
  navigation: any;
  route: {
    params: {
      country: string;
      nickname: string;
    };
  };
}

const CountryModal: React.FC<CountryModalProps> = ({navigation, route}) => {
  const {nickname} = route.params;

  const [show, setShow] = useState(false);
  const [, setCountryCode] = useState('');
  const [country, setCountry] = useState<{name: string; flag: string}>({
    name: 'Japan',
    flag: '🇯🇵',
  });

  const handlerModal = (name: string, flag: string) => {
    setCountry({name, flag});
    setShow(false);
  };
  return (
    <PrimeryWrapper>
      <Text style={styles.mainText}>Choose a country</Text>
      <Text style={styles.secondaryText}>
        For the best offers in your region
      </Text>
      <TouchableOpacity
        onPress={() => {
          setShow(true);
        }}
        style={{
          width: '100%',
          height: 50,
          borderRadius: 10,
          backgroundColor: 'white',
          padding: 10,
          marginTop: 24,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Poppins-Regular',
            fontSize: 16,
            paddingHorizontal: 8,
          }}>
          {country?.flag}
          {country?.name}
        </Text>
      </TouchableOpacity>
      <CountryPicker
        lang={''}
        style={{
          modal: {
            height: Dimensions.get('screen').height - 200,
            backgroundColor: '#EEEEFC',
          },
        }}
        show={show}
        pickerButtonOnPress={item => {
          setCountryCode(item.dial_code);
          setShow(false);
        }}
        itemTemplate={it => (
          <CountryItemAtom
            flag={it.item.flag}
            name={it.name}
            onPress={() => handlerModal(it.name, it.item.flag)}
          />
        )}
      />
      <View style={styles.container}>
        <PrimaryButton
          label={'Next'}
          onPress={() => {
            navigation.navigate('chooseemailpass', {
              country: country.name,
              nickname: nickname,
            });
          }}
          isDesable={false}
          style={{
            marginBottom: 15,
          }}
        />
      </View>
    </PrimeryWrapper>
  );
};

export default CountryModal;

const styles = StyleSheet.create({
  mainText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 26,
    color: 'black',
    marginTop: 24,
  },
  secondaryText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: 'black',
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 16,
  },
});
