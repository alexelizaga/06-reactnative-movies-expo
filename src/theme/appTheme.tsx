import {StyleSheet} from 'react-native';

export const colors = {
  primary: 'rgba(20,20,200,0.3)',
  secondary: 'rgba(20,200,20,0.3)',
  accent: 'rgba(200,20,20,0.3)',
};

export const globalStyles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginContainer: {
    marginHorizontal: 20,
  },
  subTitle: {
    fontSize: 18,
    opacity: 0.8,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
