import {useEffect, useState} from 'react';
import axios from 'axios';
import {SERVICE} from '../constants/index';
import moment from 'moment';
import {API_KEY} from '@env';

export const useWeather = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [city, setCity] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .get(`${SERVICE.BASE_URL}`, {
        params: {
          lat: 30.3165,
          lon: 78.0322,
          appid: API_KEY,
          units: 'metric',
          exclude: 'daily',
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

  return [isLoading, data, city, error];
};
