import { useContext, useState } from 'react';
import { ScrollView } from 'react-native';
import { ActivityIndicator, Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LogsContext } from '../../../services/logs/logs.context';
import { SafeArea } from "../../../components/SafeArea";
import { Text } from "../../../components/Text";
import { ChoiceCard } from '../components/ChoiceCard';
import { CardsContainer, LogButton } from './MoodLogScreen.styles';

const getEmoticon = (id: number): keyof typeof MaterialCommunityIcons.glyphMap => {
  if (id < 5) {
    return "emoticon-sad";
  } else if (id == 5) {
    return "emoticon-neutral";
  } else if (id < 8) {
    return "emoticon-happy";
  } else {
    return "emoticon";
  };
};

export const MoodLogScreen = ({ navigation }: { navigation: any }) => {
  const { feelings } = useContext(LogsContext);
  const [selected, setSelected] = useState(0);

  if (!feelings) {
    return <ActivityIndicator />
  };

  const select = (id: number) => {
    setSelected(id);
  };

  return (
    <SafeArea>
      <Text variant='heading' style={{ textAlign: 'center' }}>How do you feel?</Text>
      <Text variant='caption' style={{ textAlign: 'center', marginBottom: 16 }}>Select one of the below</Text>
      <ScrollView>
        <CardsContainer>
          {feelings.sort((a, b) => b.ID - a.ID).map((feeling) =>
            <ChoiceCard
              selected={selected}
              select={select}
              id={feeling.ID}
              text={feeling.name}
              key={feeling.ID}
              iconName={getEmoticon(feeling.ID)}
            />
          )}
        </CardsContainer>
      </ScrollView>
      <LogButton
        mode='contained'
        onPress={() => { navigation.navigate("Env", { feeling: selected }) }}
        textColor='black'
      >
        Next
      </LogButton>
    </SafeArea>
  );
};
