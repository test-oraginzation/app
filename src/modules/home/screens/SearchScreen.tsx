import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PrimaryInput from '../../core/components/primaryInput/PrimaryInput.tsx';
import {Icon} from '../../core/components/icons/iconsComponents.tsx';
import PrimeryWrapper from '../../core/components/primeryWrapper/PrimeryWrapper.tsx';
import {UserList} from '../components/userList/UserList.tsx';
import {WishList} from '../components/wishList/WishList.tsx';

const SearchScreen = () => {
  const [selectedItem, setSelectedItem] = useState<'Accounts' | 'Wish'>(
    'Accounts',
  );
  const [search, setSearch] = useState('');

  const toggleValue = () => {
    const nextValue = selectedItem === 'Accounts' ? 'Wish' : 'Accounts';
    setSelectedItem(nextValue);
    setSearch('');
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.headerFriends}>
        <View style={styles.container}>
          <PrimaryInput
            value={search}
            onChangeText={setSearch}
            placeholder={'Search'}
            style={styles.input}
          />
          <Icon
            style={styles.icon}
            name={'search'}
            size={24}
            color={'#4E9FFF'}
          />
          <TouchableOpacity onPress={() => setSearch('')}>
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerText}>
          <TouchableOpacity
            style={[
              styles.button,
              selectedItem === 'Accounts' ? styles.activeButton : null,
            ]}
            onPress={toggleValue}>
            <Text
              style={[
                styles.textSub,
                selectedItem === 'Accounts' ? styles.activeText : null,
              ]}>
              Accounts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {marginLeft: 24},
              selectedItem === 'Wish' ? styles.activeButton : null,
            ]}
            onPress={toggleValue}>
            <Text
              style={[
                styles.textSub,
                selectedItem === 'Wish' ? styles.activeText : null,
              ]}>
              Wish
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <PrimeryWrapper>
        {selectedItem === 'Accounts' ? (
          <UserList search={search} />
        ) : (
          <WishList search={search} />
        )}
      </PrimeryWrapper>
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
    marginLeft: -90,
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

export default SearchScreen;
