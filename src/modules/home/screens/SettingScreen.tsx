import React from 'react';
import PrimeryWrapper from '../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PrimaryButton from '../../core/components/primaryButton/PrimaryButton.tsx';
import {useSession} from '../../../hooks/useSession.ts';
import PrimaryInput from '../../core/components/primaryInput/PrimaryInput.tsx';
import {Formik, FormikProps} from 'formik';
import {validationSchemaSettings} from '../validation/validation.ts';
import {patchSettingData} from '../api';

const SettingScreen = () => {
  const {clearSessionTokens} = useSession();

  const delToken = async () => {
    await clearSessionTokens();
  };

  const handlePress = async (value: any) => {
    console.log(value);
    try {
      const data = await patchSettingData({
        name: value.firstName,
        surname: value.lastName,
        nickname: value.nickname,
        email: value.email,
        phone: value.phoneNumber,
        birthday: value.dateOfBirth,
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Image
        style={styles.imageCloud}
        source={require('../../../assets/images/Cloud.png')}
      />
      <PrimeryWrapper>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerImage}>
            <Image
              style={styles.image}
              source={require('../../../assets/images/024-meditation.png')}
            />
          </View>
          <View style={styles.stylesForm}>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                nickname: '',
                dateOfBirth: '',
                email: '',
                phoneNumber: '',
              }}
              validationSchema={validationSchemaSettings}
              onSubmit={values => handlePress(values)}>
              {({
                handleChange,
                handleSubmit,
                values,
                errors,
                touched,
              }: FormikProps<{
                firstName: string;
                lastName: string;
                nickname: string;
                dateOfBirth: string;
                email: string;
                phoneNumber: string;
              }>) => (
                <View>
                  <View style={styles.stylesFormContainer}>
                    <Text style={styles.lableText}>Your first name</Text>
                    <PrimaryInput
                      style={styles.primeryInput}
                      value={values.firstName}
                      onChangeText={handleChange('firstName')}
                      placeholder="Name"
                    />
                    {touched.firstName && errors.firstName && (
                      <Text style={styles.textErr}>{errors.firstName}</Text>
                    )}
                  </View>

                  <View style={styles.stylesFormContainer}>
                    <Text style={styles.lableText}>Your last name</Text>
                    <PrimaryInput
                      style={styles.primeryInput}
                      value={values.lastName}
                      onChangeText={handleChange('lastName')}
                      placeholder="Surname"
                    />
                    {touched.lastName && errors.lastName && (
                      <Text style={styles.textErr}>{errors.lastName}</Text>
                    )}
                  </View>

                  <View style={styles.stylesFormContainer}>
                    <Text style={styles.lableText}>Nickname</Text>
                    <PrimaryInput
                      style={styles.primeryInput}
                      value={values.nickname}
                      onChangeText={handleChange('nickname')}
                      placeholder="Nickname"
                    />
                    {touched.nickname && errors.nickname && (
                      <Text style={styles.textErr}>{errors.nickname}</Text>
                    )}
                  </View>

                  <View style={styles.stylesFormContainer}>
                    <Text style={styles.lableText}>Date of birth</Text>
                    <PrimaryInput
                      style={styles.primeryInput}
                      value={values.dateOfBirth}
                      onChangeText={handleChange('dateOfBirth')}
                      placeholder="Choose date"
                    />
                    {touched.dateOfBirth && errors.dateOfBirth && (
                      <Text style={styles.textErr}>{errors.dateOfBirth}</Text>
                    )}
                    <Image
                      style={styles.calendar}
                      source={require('../../../assets/images/Calendar.png')}
                    />
                  </View>

                  <View style={styles.stylesFormContainer}>
                    <Text style={styles.lableText}>Add email</Text>
                    <PrimaryInput
                      style={styles.primeryInput}
                      value={values.email}
                      onChangeText={handleChange('email')}
                      placeholder="Email"
                    />
                    {touched.email && errors.email && (
                      <Text style={styles.textErr}>{errors.email}</Text>
                    )}
                  </View>

                  <View style={styles.stylesFormContainer}>
                    <Text style={styles.lableText}>Phone number</Text>
                    <PrimaryInput
                      style={styles.primeryInput}
                      value={values.phoneNumber}
                      onChangeText={handleChange('phoneNumber')}
                      placeholder="Phone number"
                    />
                    {touched.phoneNumber && errors.phoneNumber && (
                      <Text style={styles.textErr}>{errors.phoneNumber}</Text>
                    )}
                  </View>
                  <PrimaryButton
                    style={styles.primaryButtonSave}
                    onPress={handleSubmit}
                    label={'Save'}
                  />
                </View>
              )}
            </Formik>
          </View>
          <View style={styles.containerButtonText}>
            <TouchableOpacity onPress={() => delToken()}>
              <Text style={styles.logOut}>Log out</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => delToken()}>
              <Text style={styles.delete}>Delete My Entry</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </PrimeryWrapper>
    </>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  calendar: {
    height: 24,
    width: 24,
    position: 'absolute',
    right: 15,
    top: 43,
  },
  primaryButtonSave: {
    marginTop: 40,
  },
  delete: {
    color: '#FF4E4E',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  logOut: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
  containerButtonText: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 24,
    marginBottom: 40,
  },
  lableText: {
    color: '#514F50',
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  textErr: {
    color: '#FF4E4E',
  },
  primeryInput: {
    paddingHorizontal: 8,
    alignItems: 'center',
    height: 50,
  },
  image: {
    borderRadius: 100,
    height: 100,
    width: 100,
  },
  imageCloud: {
    height: 80,
    width: '100%',
    backgroundColor: '#EEEEFC',
  },
  containerSmol: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  containerImage: {
    marginTop: 20,
    alignSelf: 'center',
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150,
    backgroundColor: '#CEECFD',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  stylesForm: {
    marginTop: 16,
  },
  stylesFormContainer: {
    marginTop: 24,
  },
});
