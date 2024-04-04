import React from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {StyleSheet, Text, View} from 'react-native';
import PrimaryButton from "../../../core/components/primaryButton/PrimaryButton.tsx";

interface ChoosePhotoProps {
  navigation: any;
}

const ChoosePhoto: React.FC<ChoosePhotoProps> = ({navigation}) => {
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
    marginBottom: 16,
  },
})
