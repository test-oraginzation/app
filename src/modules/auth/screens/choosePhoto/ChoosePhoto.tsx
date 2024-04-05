import React from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {StyleSheet, Text, View} from 'react-native';
import PrimaryButton from '../../../core/components/primaryButton/PrimaryButton.tsx';
import axios from 'axios';

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

interface Tokens {
  accessToken: string;
  refreshToken: string;
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
      // Тут ви можете додати вашу логіку для успішної відповіді
    } catch (error) {
      console.error('Error:', error);
      // Тут ви можете додати вашу логіку для обробки помилки
    }
  };

  return (
    <PrimeryWrapper>
      <Text>asd</Text>
      <View style={styles.container}>
        <PrimaryButton
          isDesable={false}
          style={{
            marginBottom: 16,
          }}
          label={'Next'}
          onPress={() => {
            handleNextPress();
          }}
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
    marginBottom: 16,
  },
});
