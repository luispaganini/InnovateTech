import { Animated, ColorSchemeName } from 'react-native';
import styled from 'styled-components/native';

export const LoadingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled(Animated.Text)<{ colorTheme: ColorSchemeName}>`
  margin-left: 5px;
  color: ${props => props.colorTheme === 'light' ? 'black' : 'white'};
  font-size: 50px;
`;