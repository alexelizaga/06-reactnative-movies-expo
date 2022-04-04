import React from 'react';
import {View, FlatList} from 'react-native';

import {Cast} from '../interfaces/CastInterface';
import {CastItem} from './CastItem';

interface Props {
  title?: string;
  cast: Cast[];
}

export const CastHorizontalSlider = ({cast}: Props) => {
  return (
    <View>
      <FlatList
        data={cast}
        renderItem={({item}: any) => <CastItem cast={item} />}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
