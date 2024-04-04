import * as React from 'react';
import { SafeAreaView, View } from "react-native";
import Root from './modules/root/index.tsx';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Root />
    </View>
  );
}
