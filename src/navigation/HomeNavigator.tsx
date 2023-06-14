import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen, DetailScreen} from '../screen/index';
import {NAVIGATION} from '../constants/navigation';

const Stack = createNativeStackNavigator();

interface DetailScreenParams {
  name: string;
  // Add other properties if necessary
}

export function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomeScreen}
        name={NAVIGATION.home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={DetailScreen}
        name={NAVIGATION.detail}
        options={({route}) => ({
          title: (route.params as DetailScreenParams)?.name ?? 'Detail',
        })}
      />
    </Stack.Navigator>
  );
}
