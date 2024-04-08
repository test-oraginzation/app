import React, {useState} from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PrimaryInput from '../../../core/components/primaryInput/PrimaryInput.tsx';
import PrimaryButton from '../../../core/components/primaryButton/PrimaryButton.tsx';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const isPressed = () => {
    if (email === '' || password === '') {
      return true;
    } else {
      return false;
    }
  };
  const SignInUser = () => {

  }
  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };
  return (
    <PrimeryWrapper>
      <Text style={styles.mainText}>Sign In</Text>
      <Text style={styles.secondaryText}>login to your account</Text>
      <PrimaryInput
        value={email}
        onChangeText={setEmail}
        placeholder={'Email'}
        style={{
          marginTop: 24,
          paddingHorizontal: 16,
          paddingVertical: 13,
          width: '100%',
          height: 50,
        }}
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <PrimaryInput
          value={password}
          onChangeText={setPassword}
          placeholder={'Password'}
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
      <View style={styles.container}>
        <PrimaryButton
          isDesable={isPressed()}
          style={{
            marginBottom: 16,
          }}
          label={'Next'}
          onPress={() => {
            SignInUser();
          }}
        />
      </View>
    </PrimeryWrapper>
  );
};

export default SignIn;

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
