import React, {useState} from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PrimaryInput from '../../../core/components/primaryInput/PrimaryInput.tsx';
import PrimaryButton from '../../../core/components/primaryButton/PrimaryButton.tsx';
import {signIn} from '../../api';
import {set} from '../../../core/services/storage.services.ts';
import {SessionType} from '../../../core/typing/enums';
import {useAuthStore} from '../../../../hooks/auth.ts';
import {checkEmptyStrings} from '../../../core/functions';

const SignIn = () => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [passwordError, setPasswordError] = useState('');

  const {saveSessionZus} = useAuthStore();
  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };
  const saveSession = async (accessToken: string, refreshToken: string) => {
    await set(SessionType.AccessToken, accessToken);
    await set(SessionType.RefreshToken, refreshToken);
    saveSessionZus(accessToken, refreshToken);
  };

  const SignInRequest = async () => {
    try {
      const {data} = await signIn({
        nickname,
        password,
      });
      saveSession(data.accessToken, data.refreshToken);
    } catch (error) {
      console.error('Error:', error);
      {
        error ? setPasswordError('user not found') : null;
      }
    }
  };

  return (
    <PrimeryWrapper>
      <Text style={styles.mainText}>Sign In</Text>
      <Text style={styles.secondaryText}>login to your account</Text>
      <PrimaryInput
        value={nickname}
        onChangeText={setNickname}
        placeholder={'Nickname'}
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
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}
        <PrimaryButton
          isDesable={checkEmptyStrings(password, nickname)}
          style={{
            marginBottom: 16,
          }}
          label={'Next'}
          onPress={() => {
            SignInRequest();
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
  errorText: {
    textAlign: 'center',
    color: 'red',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginBottom: 20,
  },
});
