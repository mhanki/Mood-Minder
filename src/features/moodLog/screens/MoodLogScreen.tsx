import { useContext } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { SafeArea } from "../../../components/SafeArea";
import { MoodScale } from "../components/MoodScale";
import { MoodGraph } from "../components/MoodGraph";
import { Log, LogsContext } from '../../../services/logs/logs.context';

export const MoodLogScreen = () => {
  const { feelings, envs, logs, retrieveLogs } = useContext(LogsContext);

  if(!feelings || !envs || !logs) {
    return <ActivityIndicator />
  };

  console.log(logs)

  return (   
    <SafeArea>
      <MoodScale feelings={feelings} envs={envs} updateLogs={retrieveLogs} />
      <MoodGraph logs={logs} feelings={feelings} />
    </SafeArea>
  );
};