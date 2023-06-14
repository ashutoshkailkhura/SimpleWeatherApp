import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface ErrorProps {
  errMsg: string;
}
export const ErrorView = ({errMsg}: ErrorProps) => (
  <View style={styles.errorContainer}>
    <Text style={styles.errorText}>{errMsg}</Text>
  </View>
);

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 32,
    color: 'pink',
    fontWeight: '600',
  },
});
