import React from 'react';
import {TabBarItemAtom} from './atoms';
import {Platform, StyleSheet, View} from 'react-native';
import {tabBarIconsConfig} from '../../nav-bar.config.tsx';
import {RouteKey} from '../../../core/typing/enums';
import {Icon} from '../../../core/components/icons/iconsComponents.tsx';

interface TabBarProps {
  routes: string[];
  onPressItem: (index: number, routeName: string) => void;
  activeIndex: number;
}

export const TabBar = ({routes, onPressItem, activeIndex}: TabBarProps) => {
  const tabItems = routes.map((route: string, index) => {
    const isActive = activeIndex === index;
    const onPress = () => onPressItem(index, route);
    if (RouteKey.Action === route) {
      return <Icon key={`${route}-${index}`} name={'plus'} size={20} />;
    }
    return (
      <TabBarItemAtom
        key={`${route}-${index}`}
        isActive={isActive}
        onPress={onPress}
        icon={tabBarIconsConfig[route]}
        name={routes[index]}
      />
    );
  });
  return (
    <View style={styles.container}>
      <>{tabItems}</>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 80 : 70,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: Platform.select({
      ios: 10,
      android: 0,
    }),
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 4,
    paddingHorizontal: 5,
  },
});
