import { StatusBar } from 'react-native';
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { LogsContextProvider } from '../services/logs/logs.context';
import { PostsContextProvider } from '../services/posts/posts.context';
import { HomeScreen } from "../features/home/screens/HomeScreen";
import { MoodLogScreen } from "../features/moodLog/screens/MoodLogScreen";
import { StatisticScreen } from "../features/statistic/screens/StatisticScreen";
import { EnvLogScreen } from "../features/moodLog/screens/EnvLogScreen";
import { MoodGraphScreen } from "../features/moodGraph/screens/MoodGraphScreen";
import { JournalNavigator } from "./JournalNavigator";
import { colors } from "../theme/colors";

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return(
    <LogsContextProvider>
      <PostsContextProvider>
        <StatusBar backgroundColor={colors.bg.primary} barStyle="light-content" />
        <Stack.Navigator screenOptions={{ 
          ...TransitionPresets.SlideFromRightIOS,
          headerStyle: { backgroundColor: colors.bg.primary },
          headerTitle: "",
          headerTintColor: "white",
          headerShadowVisible: false
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Log" component={MoodLogScreen} />
          <Stack.Screen name="Env" component={EnvLogScreen} />
          <Stack.Screen name="Journal" component={JournalNavigator} />
          <Stack.Screen name="Graph" component={MoodGraphScreen} />
          <Stack.Screen name="Statistic" component={StatisticScreen} />
        </Stack.Navigator>
      </PostsContextProvider>
    </LogsContextProvider>
  );
};