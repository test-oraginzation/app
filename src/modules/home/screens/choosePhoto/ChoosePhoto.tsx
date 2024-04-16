import React, {useCallback, useState} from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {Image, StyleSheet, Text, View} from 'react-native';
import PrimaryButton from '../../../core/components/primaryButton/PrimaryButton.tsx';
import SecondaryButton from '../../../core/components/secondaryButton/SecondaryButton.tsx';
import {launchImageLibrary} from 'react-native-image-picker';
import {finishUpload, getSignedUrl, uploadPhoto} from '../../api';

const ChoosePhoto = () => {
  // const [imgUrl, setImgUrl]
  const openImagePicker = async () => {
    // Параметри для конфігурації вибору фото
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
        // Отримати підписаний URL за допомогою вашої функції getSignedUrl
        try {
          const signedUrl = await getSignedUrl(response.fileName);
          console.log('Підписаний URL для фото:', signedUrl.data.url);
          //TODO в функції нижче потрібно зробити конвертацію в base64 замість response
          await uploadPhoto(response, signedUrl.data.url);
          const photouser = await finishUpload();
          console.log(photouser.data.photo);
        } catch (error) {
          console.log('Помилка отримання підписаного URL:', error);
        }
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
