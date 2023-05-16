import { SafeArea } from "../../../components/SafeArea";
import { MoodScale } from "../components/MoodScale";
import { MoodGraph } from "../components/MoodGraph";

export const MoodLogScreen = () => {

  return (
    <SafeArea>
      <MoodScale />
      <MoodGraph />
    </SafeArea>
  );
};