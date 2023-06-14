export function transformData(apiResponse: ApiResponse): TransformedData {
  const mainBlockData: MainBlockData = {
    city: apiResponse.city.name,
    currentTemp: apiResponse.list[0].main.temp,
    currentIcon: apiResponse.list[0].weather[0].icon,
    currentHumidity: apiResponse.list[0].main.humidity,
    currentWind: apiResponse.list[0].wind.speed,
  };

  const todayForecast: TodayForeCast[] = apiResponse.list
    .slice(1, 5)
    .map(item => ({
      time: item.dt_txt,
      temp: item.main.temp.toString(),
      icon: item.weather[0].icon,
    }));

  const upComingForecast: UpComingForecast[] = apiResponse.list
    .slice(5)
    .map(item => ({
      day: item.dt_txt,
      temp: item.main.temp.toString(),
      icon: item.weather[0].icon,
      minTemp: item.main.temp_min,
      maxTemp: item.main.temp_max,
    }));

  return {
    mainBlockData,
    todayForecast,
    upComingForecast,
  };
}
