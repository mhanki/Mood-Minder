import { useContext, useState } from 'react';
import { ScrollView } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LogsContext } from '../../../services/logs/logs.context';
import { SafeArea } from "../../../components/SafeArea";
import { Text } from "../../../components/Text";
import { ChoiceCard } from '../components/ChoiceCard';
import { CardsContainer, LogButton } from '../components/MoodLogScreen.styles';

const ICON: { [key: string]: keyof typeof MaterialCommunityIcons.glyphMap; } = {
  "at work": "laptop",
  "outdoors": "pine-tree",
  "exercising": "dumbbell",
  "downtime": "tea",
  "socializing": "chat",
  "with family": "account-multiple",
  "with significant other": "account-heart",
  "other": "label",
};

export const EnvLogScreen = ({ navigation, route }: any) => {
  const { envs, addLog } = useContext(LogsContext);
  const [selected, setSelected] = useState(0);

  if (!envs) {
    return <ActivityIndicator />
  };

  const select = (id: number) => {
    setSelected(id);
  };

  return (
    <SafeArea>
      <Text variant='heading' style={{ textAlign: 'center' }}>Where are you?</Text>
      <Text variant="caption" style={{ textAlign: 'center', marginBottom: 16 }}>Select one of the below</Text>
      <ScrollView>
        <CardsContainer>
          {envs.map((env) =>
            <ChoiceCard
              selected={selected}
              select={select}
              id={env.ID}
              text={env.name}
              key={env.ID}
              iconName={ICON[env.name]}
            />
          )}
        </CardsContainer>
      </ScrollView>
      <LogButton
        mode='contained'
        onPress={() => {
          const log: { feeling: number, environment: number } = {
            feeling: route.params.feeling,
            environment: selected
          };

          addLog(log);
          navigation.navigate("Home");
        }}
        textColor='black'
      >
        Log It
      </LogButton>
    </SafeArea>
  );
};
