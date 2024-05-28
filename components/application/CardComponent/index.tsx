import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedView } from '@/components/ThemedView';
import { Avatar } from 'react-native-paper';
import { Card, CardTextContent, InfoCardText } from './styles';
import { ThemedText } from '@/components/ThemedText';
import IUserInterface from '@/interfaces/IUserInterface';
import 'intl-pluralrules';

interface CardComponentProps {
    user: IUserInterface
}


export default function CardComponent(props: CardComponentProps) {
    const colorScheme = useColorScheme();

    const windowWidth = useWindowDimensions().width;
    const avatarSize = windowWidth * 0.2;

    return (
        <Card colorTheme={colorScheme}>
            <Avatar.Image size={avatarSize} source={{ uri: 'https://randomuser.me/api/portraits/men/12.jpg' }} />
            <CardTextContent>
                <ThemedText type="defaultSemiBold">{props.user.name + ' ' + props.user.lastName}</ThemedText>
                <InfoCardText>
                    <ThemedText type="default">{props.user.sex}</ThemedText>
                    <ThemedText type="default">{props.user.dateOfBirth.toLocaleDateString('pt-BR')}</ThemedText>
                </InfoCardText>
            </CardTextContent>
        </Card>
    )
}