import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackScreenProps} from '@react-navigation/stack';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Platform,
  ActivityIndicator,
} from 'react-native';

import {RootStackParams} from '../router/Navigation';
import {globalStyles, colors} from '../theme/appTheme';
import {useMovieDetail} from '../hooks/useMovieDetail';
import {MovieDetails} from '../components/MovieDetails';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {height: screenHeight} = Dimensions.get('screen');

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}
export const DetailScreen = ({route, navigation}: Props) => {
  const {top} = useSafeAreaInsets();
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading, movieInfo, cast} = useMovieDetail(movie.id);

  return (
    <View>
      <ScrollView>
        <View style={styles.imageContainer}>
          <View style={styles.imageBorder}>
            <Image source={{uri}} style={styles.posterImage} />
          </View>
        </View>

        <View style={globalStyles.marginContainer}>
          <Text style={globalStyles.subTitle}>{movie.original_title}</Text>
          <Text style={globalStyles.title}>{movie.title}</Text>
        </View>

        {isLoading ? (
          <ActivityIndicator
            size={30}
            color={colors.primary}
            style={{marginTop: 20}}
          />
        ) : (
          <MovieDetails movieInfo={movieInfo} cast={cast} />
        )}
      </ScrollView>
      <View style={[styles.backBtn, {top}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-circle-outline" color={'white'} size={50} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 10,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    marginBottom: 20,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderTopStartRadius: Platform.OS === 'ios' ? 25 : 0,
    borderTopEndRadius: Platform.OS === 'ios' ? 25 : 0,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  backBtn: {
    position: 'absolute',
    left: 5,
    elevation: 9,
    zIndex: 999,
  },
});
