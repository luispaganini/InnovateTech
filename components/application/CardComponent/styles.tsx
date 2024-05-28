import { ThemedView } from '@/components/ThemedView';
import { Animated, ColorSchemeName } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '@/constants/Colors';

export const Card = styled(ThemedView)<{ colorTheme: ColorSchemeName}>`
    width: 90%;
    height: 100px;
    border-radius: 2px;
    border-width: 1px;
    background-color: ${props => props.colorTheme == 'light' ? Colors.light.background : Colors.dark.background};
    border-color: ${props => props.colorTheme == 'light' ? Colors.light.border : Colors.dark.border};
    justify-content: space-between;
    padding: 10px;
    align-self: center;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
`;

export const CardTextContent = styled(ThemedView)`
    flex: 1;
    padding: 5px;
    margin-left: 10px;
    height: 100%;
    justify-content: space-between;
`;

export const InfoCardText = styled(ThemedView)`
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`;