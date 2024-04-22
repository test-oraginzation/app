import React from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {Image, StyleSheet, Text, View} from 'react-native';
import PrimaryButton from '../../../core/components/primaryButton/PrimaryButton.tsx';
import SecondaryButton from '../../../core/components/secondaryButton/SecondaryButton.tsx';
import {launchImageLibrary} from 'react-native-image-picker';
import {finishUpload, getSignedUrl, uploadPhoto} from '../../api';
import {readFile} from 'react-native-fs';

const ChoosePhoto = () => {
  const openImagePicker = async () => {
    const options = {
      title: 'Виберіть фото',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, async (response) => {
      if (response.didCancel) {
        console.log('Користувач скасував вибір фото');
      } else if (response.error) {
        console.log('Помилка вибору фото:', response.error);
      } else {
        try {
          const signedUrl = await getSignedUrl(response.assets[0].fileName);
          console.log('response.fileName:', response.assets[0].fileName);
          console.log('Підписаний URL для фото:', signedUrl.data.url);
          console.log('response.assets[0].uri', response.assets[0].uri);
          //TODO AAAAAAAAA
          await uploadPhoto(
            signedUrl.data.url,
            loadImageBase64(response.assets[0].uri),
          );
          const photouser = await finishUpload();
          console.log(photouser.data.photo);
        } catch (error) {
          console.log('Помилка отримання підписаного URL:', error);
        }
      }
    });
  };
  //конвертація
  const loadImageBase64 = async (capturedImageURI) => {
    try {
      const base64Data = await readFile(capturedImageURI, 'base64');
      return 'data:image/jpeg;base64,' + base64Data;
    } catch (error) {
      console.error('Error converting image to base64:', error);
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
          style={{}}
          label={'Photo library'}
          onPress={() => {
            openImagePicker();
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
