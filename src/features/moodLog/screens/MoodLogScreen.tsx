import { useContext } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { SafeArea } from "../../../components/SafeArea";
import { MoodScale } from "../components/MoodScale";
import { MoodGraph } from "../components/MoodGraph";
import { LogsContext } from '../../../services/logs/logs.context';

export const MoodLogScreen = () => {
  const { feelings, envs } = useContext(LogsContext);

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