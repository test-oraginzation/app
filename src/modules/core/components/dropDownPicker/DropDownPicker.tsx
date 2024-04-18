import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from '../icons/iconsComponents.tsx';

interface Currency {
  label: string;
  value: string;
}

interface DropDownPickerProps {
  items: Currency[];
  onValueChange: (value: string) => void;
}

const DropDownPicker: React.FC<DropDownPickerProps> = ({
  items,
  onValueChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Currency | null>(null);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const selectItem = (item: Currency) => {
    setSelectedItem(item);
    onValueChange(item.value);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={toggleDropDown}>
        <Text style={styles.headerText}>
          {selectedItem ? selectedItem.label : 'USD'}
        </Text>
        <Icon
          size={6}
          name={'arow'}
          color={'black'}
          style={isOpen && styles.rotate}
        />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropDown}>
          {items.map((item, index) => (
            <TouchableOpacity
              key={item.value}
              style={styles.item}
              onPress={() => selectItem(item)}>
              <Text>{item.label}</Text>
              {index < items.length - 1 && <View style={styles.borderLine} />}
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 13,
    height: 50,
    width: 164,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 16,
  },
  arrowIcon: {
    width: 20,
    height: 2,
  },
  rotate: {
    transform: [{rotate: '90deg'}],
  },
  dropDown: {
    position: 'absolute',
    marginTop: 50,
    width: 164,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    zIndex: 2,
  },
  item: {
    padding: 10,
  },
  borderLine: {
    width: 164,
    height: 1,
    backgroundColor: '#dadada',
    position: 'absolute',
    bottom: 0,
    zIndex: 1, // Ensure the line is above the item
  },
});

export default DropDownPicker;
