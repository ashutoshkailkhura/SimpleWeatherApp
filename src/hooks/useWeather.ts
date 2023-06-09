import {useEffect, useState} from 'react';
import axios from 'axios';
import {SERVICE} from '../constants/index';
import {API_KEY} from '@env';
import Geolocation from 'react-native-geolocation-service';
import {requestLocationPermission} from './permission';

export const useWeather = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [city, setCity] = useState(null);
  const [error, setError] = useState('');
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const fetchData = async () => {
    axios
      .get(`${SERVICE.BASE_URL}`, {
        params: {
          lat: lat,
          lon: lng,
          appid: API_KEY,
          units: 'metric',
        },
      })
      .then(function (response) {
        // handle success
        // var forecastData = [];
        // for (let item of response.data.list) {
        //   let day = moment(item.dt_txt).format('dddd');
        //   console.log('day ' + day);
        //   forecastData.push({
        //     day: day,
        //     max: item.main.temp_max,
        //     min: item.main.temp_min,
        //     humidity: item.main.temp_humidity,
        //     type: item.weather[0].description,
        //   });
        // }
        // console.log('forecast data ' + forecastData);
        setData(response.data.list);
        setCity(response.data.city.name);
        setIsLoading(false);
      })
      .catch(function (_error) {
        // handle error
        setError('Error fetching data');
        setIsLoading(false);
      })
      .finally(function () {
        // always executed
      });
  };

  useEffect(() => {
    (async () => {
      var allow = await requestLocationPermission();
      if (allow) {
        Geolocation.getCurrentPosition(
          position => {
            console.log('position lat ' + position.coords.latitude);
            console.log('position lng ' + position.coords.longitude);
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
          },
          _error => {
            // See error code charts below.
            console.log(_error.code, _error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }

      await fetchData();
    })();
  }, [lat, lng]);

  return [isLoading, data, city, error];
};
