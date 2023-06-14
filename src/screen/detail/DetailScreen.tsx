import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationAction, Route, RouteConfig} from '@react-navigation/native';

// interface DetailScreenProps {
//   route: RouteConfig;
// }

export function DetailScreen({route}) {
  const {day, max, min, humidity, type} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{type.toUpperCase()}</Text>
      <Text style={styles.day}>{day}</Text>
      <Text style={styles.temp}>Humidity {humidity}</Text>
      <View style={styles.tempRow}>
        <Text style={styles.temp}>Max {max} °C</Text>
        <Text style={styles.temp}>Min {min} °C</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(234, 215, 73, 0.8)',
    padding: 8,
  },
  temp: {
    textAlign: 'center',
    fontSize: 18,
  },
  tempRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  heading: {
    textAlign: 'center',
    fontSize: 32,
  },
  day: {
    textAlign: 'center',
    fontSize: 22,
  },
});
