import { TouchableOpacity, useWindowDimensions } from 'react-native'
import React from 'react'
import { useColorScheme } from '@/hooks/useColorScheme';
import { Avatar } from 'react-native-paper';
import { Card, CardTextContent, InfoCardText } from './styles';
import { ThemedText } from '@/components/ThemedText';
import IUserInterface from '@/interfaces/IUserInterface';
import 'intl-pluralrules';
import { useTranslation } from 'react-i18next';

interface CardComponentProps {
    user: IUserInterface
    onPress: () => void
}

export default function CardComponent(props: CardComponentProps) {
    const colorScheme = useColorScheme();

    const windowWidth = useWindowDimensions().width;
    const avatarSize = windowWidth * 0.2;
    const { t } = useTranslation();

    return (
        <TouchableOpacity onPress={props.onPress}>
            <Card colorTheme={colorScheme}>
                <Avatar.Image size={avatarSize} source={{ uri: props.user.picture.large }} />
                <CardTextContent>
                    <ThemedText type="defaultSemiBold">{t(props.user.name.title) + ' ' + props.user.name.first + ' ' + props.user.name.last}</ThemedText>
                    <InfoCardText>
                        <ThemedText type="default">{t(props.user.gender)}</ThemedText>
                        <ThemedText type="default">{new Date(props.user.dob.date).toLocaleDateString('pt-BR')}</ThemedText>
                    </InfoCardText>
                </CardTextContent>
            </Card>
        </TouchableOpacity>
    )
}