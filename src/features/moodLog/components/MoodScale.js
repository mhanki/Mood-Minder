import { useState } from 'react';
import { Text } from '../../../components/Text';
import styled from 'styled-components/native';
import { Slider } from '@miblanchard/react-native-slider';

const ScaleContainer = styled.View`
  padding: ${({theme}) => theme.space.medium}px;
`;

export const MoodScale = () => {
  const [feeling, setFeeling] = useState(3)

  return (
    <ScaleContainer>
      <Text variant={"title"}>Mood Scale</Text>
      <Text>Mood: {feeling}</Text>
      <Slider
        value={feeling}
        onValueChange={(value) => setFeeling(value)}
        minimumValue={1}
        maximumValue={5}
        step={1}
        trackClickable={true}
      />
    </ScaleContainer>
  );
};