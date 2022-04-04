import React from 'react';
import {useWindowDimensions, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import {Movie} from '../interfaces/MovieInterface';
import {MoviePoster} from './MoviePoster';

interface Props {
  movies: Movie[];
}
const MoviesCarousel = ({movies}: Props) => {
  const {top} = useSafeAreaInsets();
  const {width: windowWidth} = useWindowDimensions();

  return (
    <View style={{marginTop: top + 5}}>
      <View style={{height: 440}}>
        <Carousel
          data={movies}
          renderItem={({item}: any) => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
          inactiveSlideOpacity={0.9}
        />
      </View>
    </View>
  );
};

export default MoviesCarousel;
