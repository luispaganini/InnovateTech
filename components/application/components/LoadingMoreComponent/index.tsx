import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme';
import { LoadingMoreContainer, LoadingMoreText } from './styles';

export default function LoadingMoreComponent() {
    const colorScheme = useColorScheme();
    return (
        <LoadingMoreContainer testID='loading-more'>
            <ActivityIndicator color={colorScheme == 'light' ? Colors.light.border : Colors.dark.border} />
            <LoadingMoreText>CARREGANDO MAIS</LoadingMoreText>
        </LoadingMoreContainer>
    )
}