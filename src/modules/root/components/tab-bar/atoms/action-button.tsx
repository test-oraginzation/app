import React, {useRef} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Icon} from '../../../../core/components/icons/iconsComponents.tsx';
import {ButtonIcon} from '../../../../core/components/buttonIcon/ButtonIcon.tsx';
import {removeItem} from '../../../../core/services/storage.services.ts';
import {SessionType} from '../../../../core/typing/enums';

export const ActionButtonAtom = () => {
  const delToken = async () => {
    await removeItem(SessionType.AccessToken);
  };
  return (
    <ButtonIcon
      style={styles.container}
      onPress={() => {
        delToken();
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
