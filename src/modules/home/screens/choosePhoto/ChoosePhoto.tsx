import React, {useState} from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import PrimaryButton from '../../../core/components/primaryButton/PrimaryButton.tsx';
import SecondaryButton from '../../../core/components/secondaryButton/SecondaryButton.tsx';
import {launchImageLibrary} from 'react-native-image-picker';
import {get} from '../../../core/services/storage.services.ts';
import {SessionType} from '../../../core/typing/enums';
import {finishUpload, getSignedUrl, uploadPhoto} from '../../api';
import {readFile} from 'react-native-fs';

const ChoosePhoto = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const loadImageBase64 = async capturedImageURI => {
    try {
      const base64Data = await readFile(capturedImageURI, 'base64');
      return 'data:image/jpeg;base64,' + base64Data;
    } catch (error) {
      console.error('Error converting image to base64:', error);
    }
  };

  const handleChoosePhoto = () => {
    const options = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setSelectedImage(response.assets[0]);
        console.log('Selected Image:', response.assets[0].base64);
        const url = getSignedUrl(response.assets[0].fileName);
        const image = loadImageBase64(response.assets[0].uri);
        if (url) {
          uploadPhoto(image, url);
        }
        const updatedUser = finishUpload();
      }
    });
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
          style={{}}
          label={'Photo library'}
          onPress={() => {
            handleChoosePhoto();
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
