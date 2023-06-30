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
      <Text>Lorem ipsum dolor sit amet consectetur. Et quis vestibulum id quam diam mauris. Sit sit porttitor blandit ac donec sit. Id ut bibendum molestie ipsum id erat duis. Suspendisse quam enim justo morbi et. Dictum odio amet vestibulum ipsum velit eu. Amet dignissim proin erat sed. Ac est pellentesque molestie morbi quam nunc habitasse.</Text>
      <MoodGraph logs={logs} feelings={feelings} />
    </SafeArea>
  );
};
