import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const SafeAreaViewHome = styled.SafeAreaView`
    flex: 1;
    padding-top: ${StatusBar.currentHeight}px;
`;

export const HomeMainContainer = styled(ThemedView)`
    flex: 1;
`;

export const TitleText = styled(ThemedText)`
    font-size: 24px;
    margin: 10px;
    text-align: center;
    margin-top: 25px;
`;

export const ContentHome = styled(ThemedView)`
    margin-top: 20px;
    flex: 1;
`;



