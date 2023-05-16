import { useState, useEffect } from 'react';
import { Text } from '../../../components/Text';
import styled from 'styled-components/native';
import { Slider } from '@miblanchard/react-native-slider';
import DropDownPicker from 'react-native-dropdown-picker';
import { Feeling } from '../../../services/feelings/feelings.context';
import { Env } from '../../../services/envs/envs.context';
import { ActivityIndicator } from 'react-native-paper';
import { Button } from 'react-native-paper';

const ScaleContainer = styled.View`
  padding: ${({theme}) => theme.space.medium}px;
`;

export const MoodScale = ({ feelings, envs }: { feelings: Feeling[], envs: Env[]}) => {
  const [feeling, setFeeling] = useState<Feeling>();
  const [openDropdown, setopenDropdown] = useState(false);
  const [selectedEnvs, setSelectedEnvs] = useState([]);

  useEffect(() => {
    setFeeling(feelings[2]);
  }, [feelings]);

  if(!feeling) {
    return <ActivityIndicator animating={true} />
  }

  return (
    <ScaleContainer>
      <Text variant={"title"}>Mood Scale</Text>
      <Text>Mood: {feeling.name}</Text>
      
      <Slider
        value={feeling.rank}
        onValueChange={(value) => setFeeling(feelings.filter(feeling => value[0] === feeling.rank)[0])}
        minimumValue={1}
        maximumValue={5}
        step={1}
        trackClickable={true}
      />

      <DropDownPicker
        placeholder="Where are you?"
        open={openDropdown}
        value={selectedEnvs}
        items={envs.map((env) => ({label: env.name, value: env.ID}))}
        setOpen={setopenDropdown}
        setValue={setSelectedEnvs}
        multiple={true}
        mode="BADGE"
      />

      <Button 
        mode='contained' 
        style={{ zIndex: -99 }}
        onPress={() => console.log(feeling, selectedEnvs)}
      >
        Log it
      </Button>

    </ScaleContainer>
  );
};