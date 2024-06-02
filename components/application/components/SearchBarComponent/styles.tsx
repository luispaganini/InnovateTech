import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { ColorSchemeName } from "react-native";
import styled from "styled-components/native";

export const SearchBarContainer = styled(ThemedView)<{ colorTheme: ColorSchemeName }>`
    padding: 5px;
    padding-left: 10px;
    border: 1px solid ${props => props.colorTheme === 'light' ? Colors.light.border : Colors.dark.border};
    border-radius: 2px;
    flex: 1;
`;

export const SearchBarStructure = styled(ThemedView)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const SearchBarInput = styled.TextInput<{ colorTheme: ColorSchemeName }>`
    flex: 1;
    background-color: ${props => props.colorTheme === 'light' ? Colors.light.background : Colors.dark.background};
    padding: 2px;
    color: ${props => props.colorTheme === 'light' ? Colors.light.text : Colors.dark.text};
`;