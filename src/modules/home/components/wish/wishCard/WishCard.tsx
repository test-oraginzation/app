import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Icon} from '../../../../core/components/icons/iconsComponents.tsx';

interface WishCardProps {
  id: number;
  name: string;
  price: number;
  url: string;
  photoUrl?: string;
  onDelete: (id: string) => void;
}

export const WishCard: React.FC<WishCardProps> = ({
  id,
  name,
  price,
  url,
  onDelete,
}) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const actions = [{label: 'delete', value: 'delete'}];

  const handleAction = (action: string) => {
    if (action === 'delete') {
      onDelete(id);
      setDropdownVisible(false); // Закрити меню після видалення
    }
  };

  return (
    <View style={styles.card}>
      <Image
        source={require('../../../../../assets/images/Wish.png')}
        style={styles.img}
      />
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>{name}</Text>
        <Text style={styles.secondaryText}>{price} USD</Text>
        <Text style={styles.linkText}>{url}</Text>
      </View>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => setDropdownVisible(!isDropdownVisible)}>
        <Icon name={'dots'} size={16} />
      </TouchableOpacity>
      {isDropdownVisible && (
        <View style={styles.dropdownContainer}>
          {actions.map((action, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleAction(action.value)}
              style={styles.dropdownItem}>
              <Text
                style={[
                  styles.dropdownItemText,
                  action.value === 'delete' && styles.deleteText,
                ]}>
                {action.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 112,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 8,
    width: '100%',
    flexDirection: 'row',
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 10,
    margin: 6,
  },
  textContainer: {
    marginTop: 12,
    marginLeft: 6,
  },
  mainText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  secondaryText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  linkText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    marginTop: 24,
  },
  iconContainer: {
    position: 'absolute',
    top: 12,
    right: 12,
    flexDirection: 'row',
  },
  dropdownContainer: {
    position: 'absolute',
    right: 29,
    top: -5,
    borderRadius: 10,
    elevation: 5,
    padding: 10,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
  },
  icon: {
    marginRight: 10,
  },
  dropdownItemText: {
    fontSize: 16,
  },
  deleteText: {
    color: '#FF0000',
  },
});
