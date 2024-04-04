import React from 'react';
import {SafeAreaView, StyleSheet, View, ViewStyle} from 'react-native';

interface PrimeryWrapperProps {
  children: React.ReactNode;
  wrapperStyle?: ViewStyle;
  contentStyle?: ViewStyle;
}

const PrimeryWrapper = ({
  children,
  wrapperStyle,
  contentStyle,
}: PrimeryWrapperProps) => {
  return (
    <SafeAreaView style={[styles.wrapper, wrapperStyle]}>
      <View style={[styles.content, contentStyle]}>{children}</View>
    </SafeAreaView>
  );
};

export default PrimeryWrapper;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#eeeefc',
    flex: 1,
  },
  content: {
    marginHorizontal: 16,
    flex: 1,
  },
});
