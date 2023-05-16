import { useState } from 'react';
import { Text } from '../../../components/Text';
import styled from 'styled-components/native';
import { Slider } from '@miblanchard/react-native-slider';
import DropDownPicker from 'react-native-dropdown-picker';

const ScaleContainer = styled.View`
  padding: ${({theme}) => theme.space.medium}px;
`;

export const MoodScale = () => {
  const [feeling, setFeeling] = useState<number>(3);
  const [open, setOpen] = useState(false);
  const [feelings, setFeelings] = useState<number[]>([]);
  const [items, setItems] = useState([
    {label: 'Outdoors', value: 'outdoors'},
    {label: 'With family', value: 'family'},
    {label: 'At work', value: 'work'}
  ]);

  return (
    <ScaleContainer>
      <Text variant={"title"}>Mood Scale</Text>
      <Text>Mood: {feeling}</Text>
      <Slider
        value={feeling}
        onValueChange={(value) => setFeeling(value[0])}
        minimumValue={1}
        maximumValue={5}
        step={1}
        trackClickable={true}
      />
      <DropDownPicker
        open={open}
        value={feelings}
        items={items}
        setOpen={setOpen}
        setValue={setFeelings}
        setItems={setItems}
        multiple={true}
        mode="BADGE"
      />
    </ScaleContainer>
  );
};