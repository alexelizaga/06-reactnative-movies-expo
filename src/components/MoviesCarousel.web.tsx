import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Swiper from 'react-native-web-swiper';

import {globalStyles} from '../theme/appTheme';
import {Movie} from '../interfaces/MovieInterface';
import {MoviePoster} from './MoviePoster';

interface Props {
  movies: Movie[];
}

const MoviesCarousel = ({movies}: Props) => {
  const {top: marginTop} = useSafeAreaInsets();

  return (
    <View style={{marginTop, marginBottom: 40, height: 440}}>
      <Swiper
        loop
        timeout={2.5}
        controlsEnabled={false}
        controlsProps={{
          prevTitle: 'Anterior',
          nextTitle: 'Siguiente',
          dotsPos: false,
          prevPos: 'bottom-left',
          nextPos: 'bottom-right',
        }}>
        {movies.map((movie, i) => (
          <View key={i} style={globalStyles.globalContainer}>
            <MoviePoster movie={movie} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default MoviesCarousel;
