import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
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
          {selectedItem ? selectedItem.label : 'Chose currency'}
        </Text>
        <Icon
          size={6}
          name={'arow'}
          color={'black'}
          style={isOpen && styles.rotate}
        />
      </TouchableOpacity>
      {isOpen && (
        <TouchableWithoutFeedback
          style={styles.dropDownContainer}
          onPress={() => setIsOpen(false)}>
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
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  dropDownContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  dropDown: {
    position: 'absolute',
    marginTop: 50,
    width: 164,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(23,23,23,0.67)',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  item: {
    padding: 10,
  },
  borderLine: {
    width: 164,
    height: 1,
    backgroundColor: 'rgba(218,218,218,0.6)',
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
  },
});

export default DropDownPicker;
