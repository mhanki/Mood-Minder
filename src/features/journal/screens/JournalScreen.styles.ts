import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { SafeArea } from "../../../components/SafeArea";

export const PaddedSafeArea = styled(SafeArea)`
  padding: ${({theme}) => theme.space.medium}px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  padding-bottom: ${({theme}) => theme.space.medium}px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-content: space-around;
  padding-bottom: ${({theme}) => theme.space.small}px;
  justify-content: center;
`;

export const PostDisplayCard = styled(Card)`
  height: 420px;
`;

export const PostContainer = styled.ScrollView`
  padding: ${({theme}) => theme.space.big}px;
`;