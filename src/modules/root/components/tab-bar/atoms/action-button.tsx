import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {Icon} from '../../../../core/components/icons/iconsComponents.tsx';
import {ButtonIcon} from '../../../../core/components/buttonIcon/ButtonIcon.tsx';

export const ActionButtonAtom = () => {
  const actionSheetRef = useRef<ActionSheet>(null);
  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };

  return (
    <View>
      <ButtonIcon
        style={styles.container}
        onPress={openActionSheet}
        icon={<Icon size={24} name={'plus'} color={'#4E9FFF'} />}
      />
      <ActionSheet ref={actionSheetRef}>
        {/* Вміст кнопок в Action Sheet */}
        <TouchableOpacity onPress={() => console.log('Option 1 pressed')}>
          <Text>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Option 2 pressed')}>
          <Text>Option 2</Text>
        </TouchableOpacity>
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
    marginBottom: 60,
  },
});

//
// import React from 'react';
// import {StyleSheet} from 'react-native';
// import {Icon} from '../../../../core/components/icons/iconsComponents.tsx';
// import {ButtonIcon} from '../../../../core/components/buttonIcon/ButtonIcon.tsx';
//
// export const ActionButtonAtom = () => {
//   return (
//     <ButtonIcon
//       style={styles.container}
//       onPress={() => {}}
//       icon={<Icon size={24} name={'plus'} color={'#4E9FFF'} />}
//     />
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     width: 60,
//     height: 60,
//     borderRadius: 50,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 60,
//   },
// });
