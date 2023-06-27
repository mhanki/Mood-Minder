import styled from "styled-components/native";
import { Button } from 'react-native-paper';

export const CardsContainer = styled.View`
  paddingLeft: ${({theme}) => theme.space.medium}px;
  paddingRight: ${({theme}) => theme.space.medium}px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const LogButton = styled(Button)`
  width: 75%;
  alignSelf: center;
  marginTop: ${({theme}) => theme.space.medium}px;
`;