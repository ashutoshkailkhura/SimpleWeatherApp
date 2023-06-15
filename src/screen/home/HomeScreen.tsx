import {StyleSheet} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {LoaderView} from '../component/LoaderView';
import {ErrorView} from '../component/ErrorView';
import {useWeather} from '../../hooks/useWeather';
import {NavigationAction} from '@react-navigation/native';
import MainBlock from './component/MainBlock';
import TodayForecast from './component/TodayForecast';
import UpComingForecast from './component/UpComingForecast';
import {SafeAreaView} from 'react-native-safe-area-context';

interface HomeScreenProps {
  navigation: NavigationAction;
}

export function HomeScreen({navigation}: HomeScreenProps) {
  const [isLoading, data, error] = useWeather();

  if (error) {
    return <ErrorView errMsg={error} />;
  }
  if (isLoading) {
    return <LoaderView />;
  }
  if (data) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <MainBlock mainBlockData={data.mainBlockData} />
          <TodayForecast todayForecastData={data.todayForecast} />
          <UpComingForecast
            upComingForecastData={data.upComingForecast}
            nav={navigation}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(76, 80, 182, 0.8)',
  },
  scrollView: {},
});
