import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {NAVIGATION} from '../../../constants';
import moment from 'moment';
import {NavigationAction} from '@react-navigation/native';

type ItemForeCastProps = {
  forecast: UpComingForecast;
  index: number;
  navigation: NavigationAction;
};
export default function ItemForecast({
  forecast,
  index,
  navigation,
}: ItemForeCastProps) {
  var day = moment(forecast.day).format('dddd');
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(NAVIGATION.detail, {
          day: day,
          max: forecast.maxTemp,
          min: forecast.minTemp,
          name: day,
        })
      }>
      <View style={styles.container}>
        <Text style={styles.day}>{moment(forecast.day).format('dddd')}</Text>
        <Text style={styles.temp}>{forecast.minTemp}°C</Text>
        <View></View>
        <Text style={styles.temp}>{forecast.maxTemp}°C</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 14,
  },
  day: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  temp: {
    fontSize: 14,
    marginBottom: 4,
    color: 'white',
  },
});
