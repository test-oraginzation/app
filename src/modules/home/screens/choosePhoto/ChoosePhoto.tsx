import React, {useState} from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import PrimaryButton from '../../../core/components/primaryButton/PrimaryButton.tsx';
import SecondaryButton from '../../../core/components/secondaryButton/SecondaryButton.tsx';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {get, removeItem} from '../../../core/services/storage.services.ts';
import {SessionType} from '../../../core/typing/enums';
import {getSignedUrl, uploadPhoto} from '../../api';

const ChoosePhoto = () => {
  const [selectImage, setSelectImage] = useState('');
  const createFormData = (photo) => {
    const data = new FormData();

    data.append('photo', {
      name: photo.fileName,
      type: photo.type,
      uri: Platform.OS === 'ios',
    });

    return data;
  };
  const ImagePicker = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const fileName = response.assets[0].fileName;
        setSelectImage(fileName);
        get(SessionType.AccessToken)
          .then(accessToken => {
            return uploadPhoto(
              createFormData(response),
              getSignedUrl(fileName, accessToken),
            );
          })
          .then(res => {
            console.log(res.data);
          })
          .catch(error => {
            console.log(error);
          });
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
            ImagePicker();
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
