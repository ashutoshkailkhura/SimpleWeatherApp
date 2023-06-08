import {StyleSheet, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import ItemNoData from './component/ItemNoData';
import ItemForecast from './component/ItemForecast';
import {LoaderView} from './component/LoaderView';
import {ErrorView} from './component/ErrorView';
import Header from './component/Header';
import {useWeather} from '../../hooks/useWeather';

export function HomeScreen({navigation}) {
  const [isLoading, data, city, error] = useWeather();

  return (
    <View style={styles.container}>
      {isLoading ? (
        LoaderView()
      ) : error ? (
        ErrorView(error)
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <ItemForecast item={item} navigation={navigation} />
          )}
          keyExtractor={item => item.dt.toString()}
          ListEmptyComponent={ItemNoData}
          ListHeaderComponent={<Header name={city} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#57C5B6',
    justifyContent: 'center',
  },
});

// type listData = {
//   maxTemp: string;
//   minTemp: string;
//   humidity: string;
//   windSpeed: string;
//   weatherType: string;
// };
