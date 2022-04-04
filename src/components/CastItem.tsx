import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {Cast} from '../interfaces/CastInterface';

interface Props {
  cast: Cast;
}

export const CastItem = ({cast}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${cast.profile_path}`;

  return (
    <View style={styles.container}>
      {!!cast.profile_path && (
        <Image source={{uri}} style={styles.castProfile} />
      )}

      <View style={styles.castInfo}>
        <Text style={styles.title}>{cast.name}</Text>
        <Text style={styles.subtitle}>{cast.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 15,
    marginLeft: 20,
    paddingRight: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.24,
    shadowRadius: 5,

    elevation: 5,
  },
  castProfile: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  castInfo: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.8,
  },
});
