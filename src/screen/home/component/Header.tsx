import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Header({name}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '700',
    color: 'black',
  },
});
