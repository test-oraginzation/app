import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon} from '../../../../core/components/icons/iconsComponents.tsx';
import {ButtonIcon} from '../../../../core/components/buttonIcon/ButtonIcon.tsx';

export const ActionButtonAtom = () => {
  return (
    <ButtonIcon
      style={styles.container}
      onPress={() => {
        console.log('hi');
      }}
      icon={<Icon size={24} name={'plus'} color={'#4E9FFF'} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
});
