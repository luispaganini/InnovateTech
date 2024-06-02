import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { BlurView } from "expo-blur";
import { ColorSchemeName } from "react-native";
import styled from "styled-components/native";

export const ContentContainer = styled(ThemedView)`
    flex: 1;
`;

export const LeaveModalContainer = styled.Pressable<{ sizePadding: number}>`
    padding-top: ${({ sizePadding }) => sizePadding}px;
`;

export const ImageContainer = styled.View<{size: number}>`
    align-items: center;
    margin-top: -${({ size }) => size/2}px;
    margin-bottom: 20px;
`;

export const InfoContainer = styled(ThemedView)<{ theme: ColorSchemeName}>`
    flex: 1;
    padding: 20px;
    border-color: ${({ theme }) => theme == 'light'? Colors.light.border : Colors.dark.border};
    border-top-width: 1px;
`;