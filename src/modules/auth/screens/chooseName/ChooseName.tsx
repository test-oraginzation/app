import React, {useState} from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {StyleSheet, Text, View} from 'react-native';
import PrimaryInput from '../../../core/components/primaryInput/PrimaryInput.tsx';
import PrimaryButton from '../../../core/components/primaryButton/PrimaryButton.tsx';

interface ChooseNameProps {
  navigation: any;
}
const ChooseName: React.FC<ChooseNameProps> = (navigation) => {
  const [name, setName] = useState('');
  const isPressed = () => {
    if (name === '') {
      return true;
    } else {
      return false;
    }
  };
  return (
    <PrimeryWrapper>
      <Text style={styles.mainText}>Choose a nickname</Text>
      <Text style={styles.secondaryText}>You can always change it later</Text>
      <PrimaryInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
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
          label={'Next'}
          onPress={() => {
            navigation.navigation.navigate('choosecountry', {nickname: name});
          }}
          isDesable={isPressed()}
          style={{
            marginBottom: 15,
          }}
        />
      </View>
    </PrimeryWrapper>
  );
};

export default ChooseName;

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
