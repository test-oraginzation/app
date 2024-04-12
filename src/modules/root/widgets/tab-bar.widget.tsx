import React from 'react';
import {TabBar} from '../components/tab-bar';

interface Props {
  state: {index: number; routeNames: string[]};
  navigate: (routeName: string) => void;
}
export const TabBarWidget = ({state, navigate}: Props) => {
  const onPressItem = (index: number, routeName: string) => {
    if (state.index !== index) {
      navigate(routeName);
    }
  };
  return (
    <TabBar
      activeIndex={state.index}
      onPressItem={onPressItem}
      routes={state.routeNames}
    />
  );
};
