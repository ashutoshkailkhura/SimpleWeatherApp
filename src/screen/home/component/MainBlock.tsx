import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type MainBlockProps = {
  mainBlockData: MainBlockData;
};

// city: string;
// currentTemp: number;
// currentHumidity: number;
// currentWind: number;
export default function MainBlock({mainBlockData}: MainBlockProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>{mainBlockData.city}</Text>
      <Text style={styles.currentTemp}>{mainBlockData.currentTemp} °C</Text>
      <Image style={styles.icon} source={require('../../../assets/sun.png')} />
      <View style={styles.extraInfo}>
        <Text style={styles.extraText}>H {mainBlockData.currentHumidity}</Text>
        <Text style={styles.extraText}> | </Text>
        <Text style={styles.extraText}>W {mainBlockData.currentWind}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
    marginVertical: 22,
    backgroundColor: 'rgba(118, 132, 201, 0.8)',
    marginHorizontal: 14,
    borderRadius: 12,
  },
  city: {
    color: 'white',
    fontSize: 32,
    fontWeight: '600',
  },
  currentTemp: {
    color: 'white',
    fontSize: 52,
    fontWeight: '800',
  },
  extraInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  extraText: {
    color: 'white',
    fontWeight: '600',
  },
  icon: {
    width: 75,
    marginVertical: 12,
    height: 75,
  },
});
