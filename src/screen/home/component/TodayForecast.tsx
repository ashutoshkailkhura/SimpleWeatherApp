import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import ItemToday from './ItemToday';

type TodayForeCastProps = {
  todayForecastData: TodayForeCast[];
};

export default function TodayForecast({todayForecastData}: TodayForeCastProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Today</Text>
      <ScrollView horizontal>
        {todayForecastData.map((forecast, index) => (
          <ItemToday forecast={forecast} index={index} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    color: 'white',
    textAlign: 'left',
    marginHorizontal: 12,
    marginVertical: 12,
  },
});
