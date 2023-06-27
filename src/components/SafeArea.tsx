import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  /* ${ StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;` }; */
  backgroundColor: ${({theme}) => theme.colors.bg.primary};
  padding: ${({theme}) => theme.space.medium}px;
  paddingTop: 0px;
`;