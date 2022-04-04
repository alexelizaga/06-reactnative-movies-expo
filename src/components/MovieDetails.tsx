import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';
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
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" size={14} color="grey" />
          <Text> {movieInfo.vote_average}</Text>
          <Text> - {movieInfo.genres.map(g => g.name).join(', ')}</Text>
        </View>

        <Text style={{fontSize: 16, marginTop: 10}}>{movieInfo.overview}</Text>

        <Text style={{fontSize: 16, marginTop: 10, fontWeight: 'bold'}}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 16, marginTop: 5}}>
          {currencyFormatter.format(movieInfo.budget, {code: 'USD'})}
        </Text>
      </View>

      <View style={{marginBottom: 10}}>
        <Text
          style={{
            fontSize: 16,
            marginTop: 10,
            fontWeight: 'bold',
            marginBottom: 5,
            marginLeft: 20,
          }}>
          Reparto
        </Text>
        <CastHorizontalSlider cast={cast} />
      </View>
    </>
  );
};
