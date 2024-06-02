import { Text, Modal, useWindowDimensions, Pressable, View, ScrollView, useColorScheme } from 'react-native'
import React from 'react'
import IUserInterface from '@/interfaces/IUserInterface';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'react-native-paper';
import { ImageContainer, InfoContainer, LeaveModalContainer } from './styles';
import { BlurView } from 'expo-blur';

type UserDetailsModalProps = {
    visible: boolean;
    onClose: () => void;
    user: IUserInterface | null;
}

export default function UserDetailsModal(props: UserDetailsModalProps) {
    const { t } = useTranslation();

    const colorScheme = useColorScheme();
    const windowWidth = useWindowDimensions().width;
    const avatarSize = windowWidth * 0.4;
    const pageHeight = useWindowDimensions().height;

    return (
        <Modal visible={props.visible} onRequestClose={props.onClose} transparent={true} animationType='slide'>
            <BlurView intensity={90} tint={colorScheme == 'light' ? 'light': 'dark'}>
                <LeaveModalContainer sizePadding={pageHeight * 0.3} onPress={props.onClose} />
            </BlurView>
            {props.user != null &&
                <InfoContainer>
                    <ImageContainer size={avatarSize}>
                        <Avatar.Image size={avatarSize} source={{ uri: props.user.picture.large }} />
                    </ImageContainer>
                    <ScrollView>
                        <ThemedText type='subtitle'>
                            {t(props.user.name.title) + ' '
                                + props.user.name.first + ' '
                                + props.user.name.last}
                        </ThemedText>
                        <ThemedText>
                            <ThemedText type='defaultSemiBold'>E-mail: </ThemedText>
                            {props.user.email}
                        </ThemedText>
                        <ThemedText>
                            <ThemedText type='defaultSemiBold'>{t('Sex')}: </ThemedText>
                            {t(props.user.gender)}
                        </ThemedText>
                        <ThemedText>
                            <ThemedText type='defaultSemiBold'>{t('Date of Birth')}: </ThemedText>
                            {new Date(props.user.dob.date).toLocaleDateString('pt-BR')}
                        </ThemedText>
                        <ThemedText>
                            <ThemedText type='defaultSemiBold'>{t('Phone')}: </ThemedText>
                            {props.user.phone}
                        </ThemedText>
                        <ThemedText>
                            <ThemedText type='defaultSemiBold'>{t('Nationality')}: </ThemedText>
                            {t(props.user.location.country)}
                        </ThemedText>
                        <ThemedText>
                            <ThemedText type='defaultSemiBold'>{t('Address')}: </ThemedText>
                            {props.user.location.street.name}
                            {props.user.location.street.number} - {props.user.location.city}
                        </ThemedText>
                        <ThemedText>
                            <ThemedText type='defaultSemiBold'>{props.user.id.name}: </ThemedText>
                            {props.user.id.value}
                        </ThemedText>
                    </ScrollView>
                </InfoContainer>
            }
        </Modal>
    )
}