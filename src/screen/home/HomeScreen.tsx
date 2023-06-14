import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import ItemNoData from './component/ItemNoData';
import ItemForecast from './component/ItemForecast';
import {LoaderView} from '../component/LoaderView';
import {ErrorView} from '../component/ErrorView';
import Header from './component/Header';
import {useWeather} from '../../hooks/useWeather';
import {NavigationAction} from '@react-navigation/native';
import MainBlock from './component/MainBlock';

interface HomeScreenProps {
  navigation: NavigationAction;
}

export function HomeScreen({navigation}: HomeScreenProps) {
  const [isLoading, data, city, error] = useWeather();

  // return (
  //   <View style={styles.container}>
  //     {isLoading ? (
  //       <LoaderView />
  //     ) : error ? (
  //       <ErrorView errMsg={error} />
  //     ) : (
  //       <Text>{data}</Text>
  //     )}
  //   </View>
  // );

  if (error) {
    <ErrorView errMsg={error} />;
  }
  if (isLoading) {
    return <LoaderView />;
  }
  if (data) {
    return (
      <View style={styles.container}>
        <MainBlock mainBlockData={data.mainBlockData} />
      </View>
    );
  }
}

/*
<FlatList
          data={data}
          renderItem={({item}) => (
            <ItemForecast item={item} navigation={navigation} />
          )}
          keyExtractor={item => item.dt.toString()}
          ListEmptyComponent={ItemNoData}
          ListHeaderComponent={<Header name={city} />}
        />
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#57C5B6',
    justifyContent: 'center',
  },
});
