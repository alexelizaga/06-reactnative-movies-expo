import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, {
    fallback: '#228B22',
    cache: false,
    key: 'unique_key',
  });

  let primary: string | undefined;
  let secondary: string | undefined;

  switch (colors.platform) {
    case 'android':
      primary = colors.vibrant;
      secondary = colors.dominant;
      break;
    case 'ios':
      primary = colors.primary;
      secondary = colors.detail;
      break;
    default:
      throw new Error('Unexpected platform key');
  }

  return {
    primary,
    secondary,
  };
};
