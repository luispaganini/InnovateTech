// GenderFilterModal.tsx

import React, { useState } from 'react';
import { Modal, View, Pressable, Text, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTranslation } from 'react-i18next';
import { useColorScheme } from '@/hooks/useColorScheme';
import { BlurViewContainer, ButtonContainer, ModalContainer, PickerContainer, TitleText } from './styles';
import { Colors } from '@/constants/Colors';
import { BlurView } from 'expo-blur';

type GenderFilterModalProps = {
    visible: boolean;
    gender: string;
    setGender: (item: string) => void;
    onClose: () => void;
    onApply: (gender: string) => void;
};

export default function GenderFilterModal(props: GenderFilterModalProps) {
    const { t } = useTranslation();
    const colorScheme = useColorScheme();
    const [selectedGender, setSelectedGender] = useState<string>(props.gender);

    const handleApply = () => {
        props.setGender(selectedGender);
        props.onClose();
    };

    return (
        <Modal visible={props.visible} onRequestClose={props.onClose} transparent={true} animationType="slide">
            <BlurViewContainer intensity={90} tint={colorScheme == 'light' ? 'light': 'dark'}>
                <ModalContainer>
                    <TitleText type='subtitle'>{t("Select Gender")}</TitleText>
                    <PickerContainer
                        selectedValue={selectedGender}
                        onValueChange={(itemValue: any) => setSelectedGender(itemValue)}
                        theme={colorScheme}
                        dropdownIconColor={colorScheme == 'light' ? Colors.light.text : Colors.dark.text}
                    >
                        <Picker.Item label={t("All")} value="all" />
                        <Picker.Item label={t("Male")} value="male" />
                        <Picker.Item label={t("Female")} value="female" />
                    </PickerContainer>
                    <ButtonContainer>
                        <Button title={t("Cancel")} onPress={props.onClose} />
                        <Button title={t("Apply")} onPress={handleApply} />
                    </ButtonContainer>
                </ModalContainer>
            </BlurViewContainer>
        </Modal>
    );
};