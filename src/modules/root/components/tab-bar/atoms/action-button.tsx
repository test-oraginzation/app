import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from '../../../../core/components/icons/iconsComponents.tsx';
import {ButtonIcon} from '../../../../core/components/buttonIcon/ButtonIcon.tsx';
import ActionSheet from 'react-native-actions-sheet';
import {BottomMenu} from '../../actionBottomMenu/BottomMenu.tsx';

export const ActionButtonAtom = () => {
  const actionSheetRef = React.useRef<ActionSheet>(null);

  const openBottomMenu = () => {
    actionSheetRef.current?.show();
  };
  const closeBottomMenu = () => {
    actionSheetRef.current?.setModalVisible(false);
  };
  return (
    <View>
      <ButtonIcon
        style={styles.container}
        onPress={() => openBottomMenu()}
        icon={<Icon size={24} name={'plus'} color={'#4E9FFF'} />}
      />
      <ActionSheet
        isModal={true}
        containerStyle={{
          alignItems: 'center',
          height: '22%',
          backgroundColor: 'transparent',
        }}
        ref={actionSheetRef}>
        <BottomMenu onClose={closeBottomMenu} />
      </ActionSheet>
    </View>
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
    marginBottom: 65,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
