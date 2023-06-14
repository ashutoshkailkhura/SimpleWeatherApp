import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type MainBlockProps = {
  mainBlockData: MainBlockData;
};

export default function MainBlock({mainBlockData}: MainBlockProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{mainBlockData.city}</Text>
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
