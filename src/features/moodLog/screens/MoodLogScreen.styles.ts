import styled from "styled-components/native";
import { Button } from 'react-native-paper';

export const CardsContainer = styled.View`
  padding-left: ${({ theme }) => theme.space.medium}px;
  padding-right: ${({ theme }) => theme.space.medium}px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const LogButton = styled(Button)`
  width: 75%;
  align-self: center;
  margin-top: ${({ theme }) => theme.space.medium}px;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
`;
