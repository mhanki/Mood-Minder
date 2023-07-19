import styled from "styled-components/native";
import { Button, TextInput} from "react-native-paper";
import { Text } from "../../../components/Text";
import { colors } from "../../../theme/colors";
import { space } from "../../../theme/spacing";

export const AccountContainer = styled.View`
  background-color: ${({theme}) => theme.colors.bg.lighter};
  padding: ${({theme}) => theme.space.big}px;
  margin-top: ${({theme}) => theme.space.big}px;
`;

export const AuthButton = styled(Button)
  .attrs({ buttonColor: colors.bg.secondary })`
  padding: ${({theme}) => theme.space.small}px;
  margin: ${({theme}) => theme.space.medium}px;
`;

export const AccountButton = styled(Button)
  .attrs({ buttonColor: colors.bg.secondary })`
  padding: ${({theme}) => theme.space.small}px;
  margin: ${({theme}) => theme.space.medium}px;
`;

export const AuthInput = styled(TextInput)
  .attrs({ 
    theme: {colors: {primary: colors.bg.secondary}} 
  })`
  border-bottom-color: ${colors.bg.secondary};
  margin-bottom: ${space.medium}px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${({theme}) => theme.space.small}px;
  margin-bottom: ${({theme}) => theme.space.small}px;
`;