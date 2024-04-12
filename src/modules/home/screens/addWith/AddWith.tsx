import React from 'react';
import PrimeryWrapper from '../../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import SearchButton from '../../components/smallAuxiliaryButton/SmallAuxiliaryButton.tsx';

const AddWith = () => {
  return (
    <PrimeryWrapper>
      <View>
        <TouchableOpacity>
          <Image
            source={require('../../../../assets/images/addwith.png')}
            style={stules.profilePicture}
          />
          <SearchButton icon={'camera'} />
        </TouchableOpacity>
      </View>
    </PrimeryWrapper>
  );
};

export default AddWith;

const stules = StyleSheet.create({
  profilePicture: {
    marginTop: 64,
    height: 106,
    width: 106,
  },
});
