import React, {useContext} from 'react';
import {useWindowDimensions, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import {Movie} from '../interfaces/MovieInterface';
import {MoviePoster} from './MoviePoster';
import {getImageColors} from '../helpers/getImageColors';
import {GradientContext} from '../context/GradientContext';

interface Props {
  movies: Movie[];
}

const MoviesCarousel = ({movies}: Props) => {
  const {top} = useSafeAreaInsets();
  const {width: windowWidth} = useWindowDimensions();
  const {setMainColors} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const movie = movies[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const {primary = 'green', secondary = 'orange'} = await getImageColors(uri);

    setMainColors({primary, secondary});
  };

  return (
    <View style={{marginTop: top + 5}}>
      <View style={{height: 440}}>
        <Carousel
          data={movies}
          renderItem={({item}: any) => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
          inactiveSlideOpacity={0.9}
          onSnapToItem={index => getPosterColors(index)}
        />
      </View>
    </View>
  );
};

export default MoviesCarousel;
