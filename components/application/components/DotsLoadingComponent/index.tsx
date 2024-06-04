import { Animated, ColorSchemeName } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Dot, LoadingContainer } from './styles';

export default function DotsLoadingComponent({colorTheme}: {colorTheme: ColorSchemeName}) {
    const opacity = useRef(new Animated.Value(0)).current;

    const animate = () => {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start(() => animate());
    };
  
    useEffect(() => {
      animate();
    }, []);
  
    return (
      <LoadingContainer>
        <Dot colorTheme={colorTheme} style={{ opacity }} testID={'dot-1'}>.</Dot>
        <Dot colorTheme={colorTheme} style={{ opacity }} testID={'dot-2'}>.</Dot>
        <Dot colorTheme={colorTheme} style={{ opacity }} testID={'dot-3'}>.</Dot>
      </LoadingContainer>
    );
}