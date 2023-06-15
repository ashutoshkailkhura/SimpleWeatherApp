import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import moment from 'moment';

interface ItemTodayProps {
  forecast: TodayForeCast;
  index: number;
}

export default function ItemToday({forecast, index}: ItemTodayProps) {
  return (
    <View key={index} style={styles.itemContainer}>
      <Text style={styles.normalText}>
        {moment(forecast.time).format('h:mm A')}
      </Text>
      {/* <Text style={styles.normalText}>{forecast.icon}</Text> */}
      <Image style={styles.icon} source={require('../../../assets/rain.png')} />
      <Text style={styles.normalText}>{Math.round(forecast.temp)}°C</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderRadius: 12,
    backgroundColor: 'rgba(42, 79, 208, 0.38)',
    padding: 12,
    marginHorizontal: 8,
  },
  normalText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  icon: {
    width: 45,
    marginVertical: 12,
    height: 45,
  },
});
