import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PrimaryButton from '../../../core/components/primaryButton/PrimaryButton.tsx';
import PrimaryInput from '../../../core/components/primaryInput/PrimaryInput.tsx';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
interface ChooseNameProps {
  navigation: any;
}

const ChooseNamePass: React.FC<ChooseNameProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isPressed = () => {
    if (email === '' || password === '') {
      return true;
    } else {
      return false;
    }
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
      <PrimaryInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        style={{
          marginTop: 16,
          paddingHorizontal: 16,
          paddingVertical: 13,
          width: '100%',
          height: 50,
        }}
      />
      <View style={styles.container}>
        <PrimaryButton
          isDesable={isPressed()}
          style={{
            marginBottom: 16,
          }}
          label={'Next'}
          onPress={() => {
            navigation.navigate('choosecountry');
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
    marginTop: 60,
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
});
export default ChooseNamePass;
