import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from "../../../components/Text";
import { colors } from '../../../theme/colors';

const ChoiceContainer = styled.View`
  borderWidth: 1px;
  width: 130px;
  height: 130px;
  justify-content: center;
  gap: 10px;
  align-items: center;
  background-color: ${({theme}) => theme.colors.bg.lighter};
  margin-bottom: ${({theme}) => theme.space.medium}px;
  border-radius: 15px;
`;

interface ChoiceCardProps {
  id: number, 
  text: string, 
  iconName: keyof typeof MaterialCommunityIcons.glyphMap,
  select: (id: number) => void,
  selected: number
};

export const ChoiceCard = ({id, text, select, selected, iconName}: ChoiceCardProps) => {
  const textColor = selected === id ? colors.ui.primary : "white";

  return (
    <TouchableOpacity onPress={() => select(id)}>
      <ChoiceContainer>
        <MaterialCommunityIcons 
          name={iconName} 
          color={textColor}
          size={30}
        />
        <Text style={{ textAlign: "center", color: textColor }}>{text}</Text>
      </ChoiceContainer>
    </TouchableOpacity>
  )
};