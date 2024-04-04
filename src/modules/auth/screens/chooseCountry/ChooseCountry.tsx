import React, {useState} from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {Dimensions, Text, TouchableOpacity} from 'react-native';
import {CountryPicker} from 'react-native-country-codes-picker';
import {CountryItemAtom} from './atoms';

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
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={{
          width: '80%',
          height: 60,
          backgroundColor: 'black',
          padding: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
          }}>
          {country?.name}
          {country?.flag}
        </Text>
      </TouchableOpacity>
      <CountryPicker
        style={{modal: {height: Dimensions.get('screen').height - 200}}}
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
    </PrimeryWrapper>
  );
};

export default CountryModal;
