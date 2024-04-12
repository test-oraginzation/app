import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Icon} from '../../../../core/components/icons/iconsComponents.tsx';

interface TabBarItemProps {
  isActive: boolean;
  onPress: () => void;
  name: string;
  icon: any;
}
export const TabBarItemAtom = ({
  isActive,
  onPress,
  name,
  icon,
}: TabBarItemProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={icon} size={24} color={isActive ? 'black' : 'grey'} />
      <Text
        style={{
          marginTop: 6,
          color: isActive ? 'black' : 'grey',
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
