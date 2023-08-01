import { useContext } from "react";
import { ActivityIndicator } from 'react-native-paper';
import { LogsContext } from '../../../services/logs/logs.context';
import { SafeArea } from "../../../components/SafeArea";
import { MoodGraph } from "../components/MoodGraph";
import { Text } from "../../../components/Text";

export const MoodGraphScreen = () => {
  const { logs, feelings } = useContext(LogsContext);

  if (!logs || !feelings) {
    return <ActivityIndicator />
  };

  return (
    <SafeArea>
      <Text variant="heading" style={{ marginBottom: 16 }}>Everything Changes</Text>
      <Text>Nothing in life is permanent, including our moods and emotions. The essence of Cognitive Behavioral Therapy (CBT) lies in the recognition that our thoughts, feelings, and behaviours are interconnected. CBT teaches us that our moods and emotions are not fixed entities, but rather products of our thoughts and interpretations of events. By understanding that our feelings are not permanent, we gain the power to challenge negative thoughts and beliefs to find greater balance.</Text>
      { logs.length < 2 
        ? <Text style={{ marginTop: 50 }}>You haven't logged enough data yet</Text>
        : <MoodGraph logs={logs} feelings={feelings} />
      }
    </SafeArea>
  );
};
