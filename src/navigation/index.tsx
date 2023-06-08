import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeNavigator} from './HomeNavigator';

export function RootNavigator() {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}
