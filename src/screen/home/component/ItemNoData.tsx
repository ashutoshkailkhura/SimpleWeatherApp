import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ItemNoData() {
  return (
    <View style={styles.container}>
      <Text style={styles.noDataText}>No Data Found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  noDataText: {
    fontWeight: '700',
    fontSize: 28,
  },
});
