import { useContext } from 'react';
import { ScrollView } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { SafeArea } from "../../../components/SafeArea";
import { MoodScale } from "../components/MoodScale";
import { MoodGraph } from "../components/MoodGraph";
import { LogsContext } from '../../../services/logs/logs.context';

export const MoodLogScreen = () => {
  const { feelings, envs, logs, retrieveLogs } = useContext(LogsContext);

  if(!feelings || !envs || !logs) {
    return <ActivityIndicator />
  };

  return (   
    <SafeArea>
      <MoodScale feelings={feelings} envs={envs} updateLogs={retrieveLogs} />
      <MoodGraph logs={logs} feelings={feelings} />
    </SafeArea>
  );
};