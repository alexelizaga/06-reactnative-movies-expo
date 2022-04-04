import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {Movie} from '../interfaces/MovieInterface';
import {globalStyles} from '../theme/appTheme';
import {MoviePoster} from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

export const MoviesHorizontalSlider = ({title, movies}: Props) => {
  return (
    <View style={{height: title ? 266 : 220}}>
      {title && (
        <View style={globalStyles.marginContainer}>
          <Text style={globalStyles.title}>{title}</Text>
        </View>
      )}

      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster
            movie={item}
            width={140}
            height={200}
            marginHorizontal={0}
          />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
