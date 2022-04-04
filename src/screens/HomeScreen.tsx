import React from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';

import {globalStyles, colors} from '../theme/appTheme';
import {useMovies} from '../hooks/useMovies';
import MoviesCarousel from '../components/MoviesCarousel.native';
// import MoviesCarousel from '../components/MoviesCarousel.web';
import {MoviesHorizontalSlider} from '../components/MoviesHorizontalSlider';
import {GradientBackground} from '../components/GradientBackground';

export const HomeScreen = () => {
  const {isLoading, nowPlaying, popular, topRated, upcoming} = useMovies();

  if (isLoading) {
    return (
      <View style={globalStyles.globalContainer}>
        <ActivityIndicator color={colors.primary} size={100} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View>
          <MoviesCarousel movies={nowPlaying} />
          <MoviesHorizontalSlider title="Populares" movies={popular} />
          <MoviesHorizontalSlider title="Mejor valoradas" movies={topRated} />
          <MoviesHorizontalSlider title="Próximamente" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
