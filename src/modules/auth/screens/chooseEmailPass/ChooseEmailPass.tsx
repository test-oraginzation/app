import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PrimaryButton from '../../../core/components/primaryButton/PrimaryButton.tsx';
import PrimaryInput from '../../../core/components/primaryInput/PrimaryInput.tsx';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';

interface ChooseEmailPassProps {
  navigation: any;
  route: {
    params: {
      country: string;
    };
  };
}

const ChooseEmailPass: React.FC<ChooseEmailPassProps> = ({
  navigation,
  route,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const {country} = route.params;
  const isPressed = () => {
    if (email === '' || password === '') {
      return true;
    } else {
      return false;
    }
  };

  const validateEmail = (email: string) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  const handleAuth = () => {
    setEmailError(validateEmail(email) ? '' : 'Incorrect email format');
    setPasswordError(
      password.length >= 6
        ? ''
        : 'The password must contain at least 6 characters',
    );

    if (validateEmail(email) && password.length >= 6) {
      navigation.navigate('choosephoto', {
        country: country,
        email: email,
        password: password,
      });
    }
  };

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };
  return (
    <PrimeryWrapper>
      <Text style={styles.mainText}>Email and password</Text>
      <Text style={styles.secondaryText}>Don't forget these details</Text>
      <PrimaryInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={{
          marginTop: 24,
          paddingHorizontal: 16,
          paddingVertical: 13,
          width: '100%',
          height: 50,
        }}
      />
      {emailError ? <Text style={styles.textError}>{emailError}</Text> : null}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <PrimaryInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={hidePassword}
          style={{
            marginTop: 16,
            paddingHorizontal: 16,
            paddingVertical: 13,
            width: '100%',
            height: 50,
          }}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={{marginLeft: -40, alignItems: 'center', height: 10}}>
          <Image
            source={
              hidePassword
                ? require('../../../../assets/images/hide.png')
                : require('../../../../assets/images/view.png')
            }
            style={{width: 28, height: 28}}
          />
        </TouchableOpacity>
      </View>
      {passwordError ? (
        <Text style={styles.textError}>{passwordError}</Text>
      ) : null}

      <View style={styles.container}>
        <PrimaryButton
          isDesable={isPressed()}
          style={{
            marginBottom: 16,
          }}
          label={'Next'}
          onPress={() => {
            handleAuth();
          }}
        />
      </View>
    </PrimeryWrapper>
  );
};

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
  wrapper: {
    backgroundColor: '#eeeefc',
    flex: 1,
  },
  content: {
    marginHorizontal: 16,
    flex: 1,
  },
  image: {
    marginTop: 40,
    width: 375,
    height: 330,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 16,
  },
  textError: {
    fontFamily: 'Poppins-Regular',
    color: 'red',
    marginTop: 5,
    marginLeft: 5,
  },
});
export default ChooseEmailPass;
