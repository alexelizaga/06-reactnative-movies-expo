import React, {createContext, useState} from 'react';

interface ImageColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImageColors;
  prevColors: ImageColors;
  setMainColors: (colors: ImageColors) => void;
  setPrevMainColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({children}: any) => {
  const [colors, setColors] = useState({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [prevColors, setPrevColors] = useState({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (_colors: ImageColors) => {
    setColors(_colors);
  };

  const setPrevMainColors = (_colors: ImageColors) => {
    setPrevColors(_colors);
  };

  return (
    <GradientContext.Provider
      value={{
        colors,
        prevColors,
        setMainColors,
        setPrevMainColors,
      }}>
      {children}
    </GradientContext.Provider>
  );
};
