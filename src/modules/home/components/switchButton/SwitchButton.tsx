import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface SwitchButtonProps {
  onValueChange: (value: 'Lists' | 'Wish') => void;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({onValueChange}) => {
  const [activeValue, setActiveValue] = useState<'Lists' | 'Wish'>('Lists');

  const toggleValue = () => {
    const nextValue = activeValue === 'Lists' ? 'Wish' : 'Lists';
    setActiveValue(nextValue);
    onValueChange(nextValue);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          activeValue === 'Lists' ? styles.activeButton : null,
        ]}
        onPress={toggleValue}>
        <Text
          style={[
            styles.buttonText,
            activeValue === 'Lists' ? styles.activeButtonText : null,
          ]}>
          Lists
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          activeValue === 'Wish' ? styles.activeButton : null,
        ]}
        onPress={toggleValue}>
        <Text
          style={[
            styles.buttonText,
            activeValue === 'Wish' ? styles.activeButtonText : null,
          ]}>
          Wish
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 30,
    overflow: 'hidden',
    height: 36,
    marginTop: 24,
    // marginBottom: ,
  },
  button: {
    flex: 1,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: '#CEECFD',
    borderColor: '#4E9FFF',
    borderRadius: 20,
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
  },
  activeButtonText: {
    color: '#4E9FFF',
  },
});

export default SwitchButton;
