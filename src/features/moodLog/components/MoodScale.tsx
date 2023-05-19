import { useState, useEffect } from 'react';
import { Text } from '../../../components/Text';
import styled from 'styled-components/native';
import { Slider } from '@miblanchard/react-native-slider';
import DropDownPicker from 'react-native-dropdown-picker';
import { Feeling, Env, Log } from '../../../services/logs/logs.context';
import { addLog } from '../../../services/logs/logs.service';
import { ActivityIndicator } from 'react-native-paper';
import { Button } from 'react-native-paper';

const ScaleContainer = styled.View`
  padding: ${({theme}) => theme.space.medium}px;
`;

export const MoodScale = ({ feelings, envs, updateLogs }: { feelings: Feeling[], envs: Env[], updateLogs: any}) => {
  const [feeling, setFeeling] = useState<Feeling>();
  const [openDropdown, setopenDropdown] = useState(false);
  const [selectedEnvs, setSelectedEnvs] = useState([]);

  useEffect(() => {
    setFeeling(feelings[5]);
  }, [feelings]);

  if(!feeling) {
    return <ActivityIndicator animating={true} />
  };

  const handleLog = async () => {
    try {
      const newLog = { feeling: feeling.ID, environment: selectedEnvs[0] }
      await addLog(newLog);
      updateLogs();
      setFeeling(feelings[5]);
      setSelectedEnvs([]);
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <ScaleContainer>
      <Text variant={"body"}>Right now I'm feeling:</Text>
      <Text>{feeling.name.toUpperCase()}</Text>
      
      <Slider
        value={feeling.rank}
        onValueChange={(value) => setFeeling(feelings.filter(feeling => value[0] === feeling.rank)[0])}
        minimumValue={1}
        maximumValue={feelings.length}
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
        style={{ zIndex: -99, margin: 10 }}
        onPress={handleLog}
      >
        Log it
      </Button>

    </ScaleContainer>
  );
};