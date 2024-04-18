import React, {useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';

interface ToggleButtonProps {
  text: string;
  onToggle: (isEnabled: boolean) => void;
}
export const ToggleButton = ({text, onToggle}: ToggleButtonProps) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    onToggle(newState);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Switch
        trackColor={{false: '#CEDAE6', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#ffffff' : '#f4f3f4'}
        ios_backgroundColor="#CEDAE6"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: 'black',
  },
  container: {
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 13,
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 50,
    width: '100%',
  },
});
