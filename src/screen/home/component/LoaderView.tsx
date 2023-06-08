import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';

export const LoaderView = () => (
  <View style={styles.loaderContainer}>
    <ActivityIndicator size="large" color="#000000" />
  </View>
);

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
