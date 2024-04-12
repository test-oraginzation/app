import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from "../../../../core/components/icons/iconsComponents.tsx";

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
      <Icon name={icon} size={20} color={isActive ? 'red':' grey'}/>
      <Text>
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
