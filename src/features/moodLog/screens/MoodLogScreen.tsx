import { useContext } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { SafeArea } from "../../../components/SafeArea";
import { MoodScale } from "../components/MoodScale";
import { MoodGraph } from "../components/MoodGraph";
import { FeelingsContext } from '../../../services/feelings/feelings.context';
import { EnvsContext } from '../../../services/envs/envs.context';

export const MoodLogScreen = () => {
  const { feelings } = useContext(FeelingsContext);
  const { envs } = useContext(EnvsContext);

  if(!feelings || !envs){
    return <ActivityIndicator />
  }

  return (   
    <SafeArea>
      <MoodScale feelings={feelings} envs={envs} />
      <MoodGraph />
    </SafeArea>
  );
};