import React from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {Image, StyleSheet, Text, View} from 'react-native';
import PrimaryButton from '../../../core/components/primaryButton/PrimaryButton.tsx';
import axios from 'axios';
import SecondaryButton from '../../../core/components/secondaryButton/SecondaryButton.tsx';

interface ChoosePhotoProps {
  navigation: any;
  route: {
    params: {
      country: string;
      email: string;
      password: string;
    };
  };
}

const ChoosePhoto: React.FC<ChoosePhotoProps> = ({navigation, route}) => {
  const {country, email, password} = route.params;

  const handleNextPress = async () => {
    try {
      const response = await axios.post(
        'http://10.10.10.228:3002/auth/sign-up',
        {
          country,
          email,
          password,
        },
      );
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <PrimeryWrapper>
      <Text style={styles.mainText}>Add a profile photo</Text>
      <Text style={styles.secondaryText}>
        So that your friends can recognize you!
      </Text>
      <Image
        style={styles.image}
        source={require('../../../../assets/images/Frame36.png')}
      />
      <View style={styles.container}>
        <PrimaryButton
          isDesable={false}
          style={{
          }}
          label={'Photo library'}
          onPress={() => {
            // handleNextPress();
          }}
        />
        <SecondaryButton
          isDesable={false}
          style={{
            backgroundColor: '#FFFFFF',
          }}
          label={'Camera'}
          onPress={() => {}}
        />
      </View>
    </PrimeryWrapper>
  );
};

export default ChoosePhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
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
  image: {
    marginTop: 40,
    width: 215,
    height: 215,
    alignSelf: 'center',
  },
});
