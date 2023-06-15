import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationAction} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import ItemForecast from './ItemForecast';

type UpComingForecastProps = {
  upComingForecastData: UpComingForecast[];
  nav: NavigationAction;
};

export default function UpComingForecast({
  upComingForecastData,
  nav,
}: UpComingForecastProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>In Next 4 days</Text>
      <ScrollView>
        {upComingForecastData.map((forecast, index) => (
          <ItemForecast forecast={forecast} index={index} navigation={nav} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(118, 132, 201, 0.8)',
    borderRadius: 12,
    margin: 8,
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
