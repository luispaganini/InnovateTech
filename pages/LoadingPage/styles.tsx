import styled from "styled-components/native";
import { Colors } from "@/constants/Colors";
import { ColorSchemeName, Dimensions } from "react-native";

export const MainView = styled.View<{ colorScheme: ColorSchemeName }>`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.colorScheme ? Colors[props.colorScheme].background : Colors.light.background};
`;

export const LoadingImage = styled.Image`
    width: ${Dimensions.get('window').width * 0.8}px;
    height: ${Dimensions.get('window').width * 0.8}px;
`;