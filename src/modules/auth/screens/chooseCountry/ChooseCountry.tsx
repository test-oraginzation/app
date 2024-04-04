import React, {useState} from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CountryPicker} from 'react-native-country-codes-picker';
import {CountryItemAtom} from './atoms';
import PrimaryButton from '../../../core/components/primaryButton/PrimaryButton.tsx';

interface CountryModalProps {
  navigation: any;
}

const CountryModal: React.FC<CountryModalProps> = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [country, setCountry] = useState<{name: string; flag: string}>();

  console.log('country', country);

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
        onPress={() => setShow(true)}
        style={{
          width: '100%',
          height: 50,
          borderRadius: 10,
          backgroundColor: 'white',
          padding: 10,
          marginTop: 24,
        }}>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Poppins-Regular',
            fontSize: 16,
            paddingHorizontal: 8,
          }}>
          {country?.name}
          {country?.flag}
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
            onPress={() => handlerModal(it.item.flag, it.name)}
          />
        )}
      />
      <View style={styles.container}>
        <PrimaryButton
          label={'Next'}
          onPress={() => {}}
          isDesable={false}
          style={{

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
    marginTop: 60,
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
