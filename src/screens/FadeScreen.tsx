import React from 'react';
import {View, Animated, Button, StyleSheet} from 'react-native';
import {useFade} from '../hooks/useFade';

export const FadeScreen = () => {
  const {opacity, fadeIn, fadeOut} = useFade();

  return (
    <View style={[styles.slide1, {}]}>
      <Animated.View style={[styles.slide2, {opacity}]} />

      <Button title="FadeIn" onPress={() => fadeIn()} />
      <Button title="FadeOut" onPress={() => fadeOut()} />
    </View>
  );
};

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    backgroundColor: '#084F6A',
    width: 150,
    height: 150,
    borderColor: 'white',
    borderWidth: 10,
    marginBottom: 10,
  },
});
