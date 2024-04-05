import React from 'react';
import PrimaryButton from '../../../core/components/primaryButton/PrimaryButton.tsx';
import {Image, StyleSheet, Text, View} from 'react-native';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';

interface OnBoardingProps {
  navigation: any;
}

const OnBoarding: React.FC<OnBoardingProps> = ({navigation}) => {
  return (
    <PrimeryWrapper>
      <Text style={styles.mainText}>The best gift app</Text>
      <Text style={styles.secondaryText}>
        Create a wishlist and subscribe to their accounts to stay updated!
      </Text>
      <Image
        style={styles.image}
        source={require('../../../../assets/images/024-meditation.png')}
      />
      <View style={styles.container}>
        <PrimaryButton
          isDesable={false}
          style={{
            marginBottom: 16,
          }}
          label={'Get Started'}
          onPress={() => navigation.navigate('choosecountry')}
        />
      </View>
    </PrimeryWrapper>
  );
};

export default OnBoarding;

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
