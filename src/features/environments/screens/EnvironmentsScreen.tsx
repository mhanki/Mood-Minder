import { useState, useContext } from 'react';
import { ActivityIndicator, SegmentedButtons } from 'react-native-paper';
import { SafeArea } from '../../../components/SafeArea';
import { Text } from '../../../components/Text';
import { LogsContext, Log } from '../../../services/logs/logs.context';
import { colors } from '../../../theme/colors';
import { EnvChart } from '../components/EnvChart';

export const EnvironmentsScreen = () => {
  const { logs, envs } = useContext(LogsContext);
  const [mood, setMood] = useState('good');

  if (!logs || !envs) {
    console.log(logs)
    return <ActivityIndicator/>;
  };

  const filterLogsByMood = (mood: string): Log[] => {
    switch (mood) {
      case 'good':
        return logs.filter((log) => log.feelingRank >= 6);
      case 'bad':
        return logs.filter((log) => log.feelingRank < 6);
      default:
        return logs;
    }
  };

  let filteredLogs = filterLogsByMood(mood);

  return (
    <SafeArea>
      <Text variant='heading' style={{ textAlign: 'center', marginBottom: 15 }}>Where you are when you are feeling</Text>

      <SegmentedButtons
        value={mood}
        onValueChange={setMood}
        buttons={[
          {
            value: 'good',
            label: 'Good'
          },
          {
            value: 'bad',
            label: 'Bad'
          }
        ]}
        theme={{ colors: { 
          secondaryContainer: colors.bg.secondary,
          onSecondaryContainer: "black",
          onSurface: "white"
        }}}
        style={{ width: 200, alignSelf: "center" }}
      />

      {logs.length < 1
        ? <Text style={{ marginTop: 50, textAlign: "center"}}>You haven't logged anything yet</Text>
        : <EnvChart filteredLogs={filteredLogs} envs={envs} />
      }
    </SafeArea>
  )
};