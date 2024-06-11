import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PrimaryInput from '../../../core/components/primaryInput/PrimaryInput.tsx';
import {Icon} from '../../../core/components/icons/iconsComponents.tsx';

interface SwitchButton {
  onValueChange: (value: 'Accounts' | 'Wish') => void;
  toggleComponent: () => void;
}

export const HeaderSearchAccWish: React.FC<SwitchButton> = ({
  onValueChange,
  toggleComponent,
}) => {
  const [activeValue, setActiveValue] = useState<'Accounts' | 'Wish'>(
    'Accounts',
  );
  const [search, setSearch] = useState('');

  const toggleValue = () => {
    const nextValue = activeValue === 'Accounts' ? 'Wish' : 'Accounts';
    setActiveValue(nextValue);
    onValueChange(nextValue);
  };

  return (
    <View style={styles.headerFriends}>
      <View style={styles.container}>
        <PrimaryInput
          value={search}
          onChangeText={setSearch}
          placeholder={'Search'}
          style={styles.input}
        />
        <Icon style={styles.icon} name={'search'} size={24} color={'#4E9FFF'} />
        <TouchableOpacity onPress={toggleComponent}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerText}>
        <TouchableOpacity
          style={[
            styles.button,
            activeValue === 'Accounts' ? styles.activeButton : null,
          ]}
          onPress={toggleValue}>
          <Text
            style={[
              styles.textSub,
              activeValue === 'Accounts' ? styles.activeText : null,
            ]}>
            Accounts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {marginLeft: 24},
            activeValue === 'Wish' ? styles.activeButton : null,
          ]}
          onPress={toggleValue}>
          <Text
            style={[
              styles.textSub,
              activeValue === 'Wish' ? styles.activeText : null,
            ]}>
            Wish
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerFriends: {
    backgroundColor: 'white',
    paddingTop: 70,
    height: 175,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  container: {
    flexDirection: 'row',
    marginHorizontal: 16,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#4E9FFF',
  },
  input: {
    backgroundColor: '#E8EDF1',
    height: 50,
    width: 270,
    paddingLeft: 16,
    paddingRight: 42,
    paddingVertical: 13,
  },
  icon: {
    marginLeft: -80,
    alignItems: 'center',
  },
  containerText: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 0,
  },
  textSub: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#514F50',
  },
  button: {
    borderColor: '#000',
    paddingBottom: 12,
  },
  activeText: {
    color: '#4E9FFF',
  },
  activeButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#4E9FFF',
  },
});