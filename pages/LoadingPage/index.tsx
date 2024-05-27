import React from 'react'
import { useColorScheme } from '@/hooks/useColorScheme';
import { LoadingImage, MainView } from './styles';
import DotsLoading from '@/components/DotsLoading';

export default function LoadingPage() {
  const colorScheme = useColorScheme();

  const imageUrl = {
    light: require('@/assets/images/loading-light.png'),
    dark: require('@/assets/images/loading-dark.png')
  }

  const imageSource = colorScheme === 'light' ? imageUrl.light : imageUrl.dark;

  return (
    <MainView colorScheme={colorScheme}>
      <LoadingImage
        source={imageSource}
      />
      <DotsLoading colorTheme={colorScheme}/>
    </MainView>
  )
}