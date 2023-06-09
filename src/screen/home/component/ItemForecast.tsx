import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  PermissionsAndroid,
} from 'react-native';
import {NAVIGATION} from '../../../constants';
import moment from 'moment';

export default function ItemForecast({navigation, item}) {
  var day = moment(item.dt_txt).format('dddd');
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(NAVIGATION.detail, {
          day: day,
          max: item.main.temp_max,
          min: item.main.temp_min,
          humidity: item.main.humidity,
          type: item.weather[0].description,
          name: day,
        })
      }>
      <View style={styles.container}>
        <Text style={styles.weather}>
          {item.weather[0].description.toString().toUpperCase()}
        </Text>
        <Text style={styles.time}>{moment(item.dt_txt).format('dddd')}</Text>
        <Text style={styles.time}>
          {moment(item.dt_txt).format('hh:mm:ss a')}
        </Text>
        <View style={styles.tempContainer}>
          <Text style={styles.text}>Min Temp: {item.main.temp_min} °C</Text>
          <Text style={styles.text}>Max Temp: {item.main.temp_max} °C</Text>
        </View>
        <Text style={styles.text}>Humidity: {item.main.humidity}</Text>
        <Text style={styles.text}>Wind Speed: {item.wind.speed}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 4,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#002B5B',
    borderRadius: 12,
    padding: 8,
  },
  tempContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  text: {
    fontSize: 14,
    marginBottom: 4,
    color: 'white',
  },
  weather: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});

/*
{
      "dt": 1686031200,
      "main": {
        "temp": 299.56,
        "feels_like": 299.56,
        "temp_min": 299.56,
        "temp_max": 307.73,
        "pressure": 1007,
        "sea_level": 1007,
        "grnd_level": 936,
        "humidity": 28,
        "temp_kf": -8.17
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 7
      },
      "wind": {
        "speed": 2.98,
        "deg": 252,
        "gust": 2.27
      },
      "visibility": 10000,
      "pop": 0.11,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-06-06 06:00:00"
    },
*/
