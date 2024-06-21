import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RouteKey} from '../../../core/typing/enums';
import {useNavigation} from '@react-navigation/native';
import ActionSheet from 'react-native-actions-sheet';

interface BottomMenuProps {
  onClose: () => void;
}
export const BottomMenu: React.FC<BottomMenuProps> = ({onClose}) => {
  const actionSheetRef = React.useRef<ActionSheet>(null);
  const navigation = useNavigation();

  const closeActionSheet = () => {
    navigation.navigate(RouteKey.AddWith);
  };

  const navigateAddWish = () => {
    navigation.navigate(RouteKey.AddWith);
    onClose();
  };
  const navigateAddList = () => {
    navigation.navigate(RouteKey.AddList);
    onClose();
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={[
          styles.mainContainer,
          {
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          },
        ]}
        onPress={() => navigateAddWish()}>
        <Text style={styles.text}>Add a wish</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.mainContainer,
          {
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            borderTopColor: 'grey',
            borderTopWidth: 1,
          },
        ]}
        onPress={() => navigateAddList()}>
        <Text style={styles.text}>Create a list</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondContainer} onPress={onClose}>
        <Text style={styles.text}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // marginBottom: 50,
    flex: 1,
  },
  mainContainer: {
    paddingVertical: 13,
    height: 48,
    width: 342,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  secondContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: 342,
    backgroundColor: 'white',
    borderRadius: 12,
    marginTop: 8,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    textAlign: 'center',
    color: '#4E9FFF',
  },
});
