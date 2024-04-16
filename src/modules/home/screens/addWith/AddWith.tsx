import React, {useState} from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SearchButton from '../../components/smallAuxiliaryButton/SmallAuxiliaryButton.tsx';
import PrimaryInput from '../../../core/components/primaryInput/PrimaryInput.tsx';
import PrimaryButton from '../../../core/components/primaryButton/PrimaryButton.tsx';

const AddWith = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [currency, setCurrency] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  return (
    <PrimeryWrapper>
      <ScrollView>
        <View>
          <TouchableOpacity>
            <Image
              source={require('../../../../assets/images/addwith.png')}
              style={styles.profilePicture}
            />
            <SearchButton icon={'camera'} />
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <Text>Name with</Text>
            <PrimaryInput
              value={name}
              onChangeText={setName}
              placeholder={'Enter with name'}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 13,
                width: '100%',
                height: 50,
              }}
            />
          </View>
          <View>
            <View>
              <Text>Price</Text>
              <PrimaryInput
                value={price}
                onChangeText={setPrice}
                placeholder={'Price'}
              />
            </View>
            <View>
              <Text>Currency</Text>
              <PrimaryInput
                value={currency}
                onChangeText={setCurrency}
                placeholder={'Currency'}
              />
            </View>
          </View>
          <View>
            <Text>URL</Text>
            <PrimaryInput
              value={url}
              onChangeText={setUrl}
              placeholder={'Add website URL'}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 13,
                width: '100%',
                height: 50,
              }}
            />
          </View>
          <View>
            <Text>Description</Text>
            <PrimaryInput
              value={description}
              onChangeText={setDescription}
              placeholder={'Enten a description'}
            />
          </View>
          <View>
            <Text>Hide wishes from other users</Text>
          </View>
        </View>
        <View style={styles.containerForButton}>
          <PrimaryButton
            label={'Add a wish'}
            onPress={() => {}}
            style={{
              marginBottom: 16,
            }}
          />
        </View>
      </ScrollView>
    </PrimeryWrapper>
  );
};

export default AddWith;

const styles = StyleSheet.create({
  profilePicture: {
    marginTop: 64,
    height: 106,
    width: 106,
    position: 'relative',
  },
  containerForButton: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 16,
  },
  lableMain: {
    color: '#514F50',
    marginBottom: 8,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});
