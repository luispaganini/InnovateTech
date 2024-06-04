import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { Picker } from '@react-native-picker/picker';
import { BlurView } from "expo-blur";
import { ColorSchemeName } from "react-native";
import styled from "styled-components/native";

export const BlurViewContainer = styled(BlurView)`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled(ThemedView)`
    width: 80%;
    padding: 20px;
    border-radius: 10px;
`;

export const TitleText = styled(ThemedText)`
    text-align: center;
`;

export const PickerContainer = styled(Picker)<{ theme: ColorSchemeName}>`
    background-color: ${ ({ theme }) => theme == 'light' ? Colors.light.inputColor : Colors.dark.inputColor};
    color: ${ ({ theme }) => theme == 'light' ? Colors.light.text : Colors.dark.text};
    margin-top: 10px;
    border-color: ${ ({ theme }) => theme == 'light' ? Colors.light.border : Colors.dark.border};
    border-width: 1px;
    margin-bottom: 10px;
`;

export const ButtonContainer = styled(ThemedView)`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
`;

