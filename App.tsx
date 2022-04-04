import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';

import {Navigation} from './src/router/Navigation';

export const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
      <StatusBar />
    </NavigationContainer>
  );
};

export default App;
