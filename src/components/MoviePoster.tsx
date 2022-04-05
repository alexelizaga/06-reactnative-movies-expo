import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Movie} from '../interfaces/MovieInterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
  marginHorizontal?: number;
}
export const MoviePoster = ({
  movie,
  height = 420,
  width = 300,
  marginHorizontal = 0,
}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', movie)}
      activeOpacity={0.8}
      style={[styles.btn, {width, height, marginHorizontal}]}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 10,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
  btn: {
    paddingBottom: 20,
    paddingHorizontal: 5,
  },
});
