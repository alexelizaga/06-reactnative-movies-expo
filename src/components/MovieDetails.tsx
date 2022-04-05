import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, StyleSheet} from 'react-native';
import currencyFormatter from 'currency-formatter';

import {Cast} from '../interfaces/CastInterface';
import {MovieInfoResponse} from '../interfaces/MovieInfoInterface';
import {globalStyles} from '../theme/appTheme';
import {CastHorizontalSlider} from './CastHorizontalSlider';

interface Props {
  movieInfo: MovieInfoResponse;
  cast: Cast[];
}

export const MovieDetails = ({movieInfo, cast}: Props) => {
  return (
    <>
      <View style={globalStyles.marginContainer}>
        <View style={styles.row}>
          <Icon name="star-outline" size={14} color="grey" />
          <Text> {movieInfo.vote_average}</Text>
          <Text> - {movieInfo.genres.map(g => g.name).join(', ')}</Text>
        </View>

        <Text style={styles.overview}>{movieInfo.overview}</Text>

        <Text style={styles.subtitle}>Presupuesto</Text>
        <Text style={styles.currency}>
          {currencyFormatter.format(movieInfo.budget, {code: 'USD'})}
        </Text>
      </View>

      <View style={styles.castSection}>
        <Text style={styles.castSubtitle}>Reparto</Text>
        <CastHorizontalSlider cast={cast} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  overview: {
    fontSize: 16,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
  },
  currency: {
    fontSize: 16,
    marginTop: 5,
  },
  castSection: {
    marginBottom: 10,
  },
  castSubtitle: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 20,
  },
});
