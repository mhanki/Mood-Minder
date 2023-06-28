import { StatusBar } from 'react-native';
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { PostsContextProvider } from '../services/posts/posts.context';
import { LogsContextProvider } from '../services/logs/logs.context';
import { HomeScreen } from "../features/moodLog/screens/HomeScreen";
import { MoodLogScreen } from "../features/moodLog/screens/MoodLogScreen";
import { EnvironmentsScreen } from "../features/environments/screens/EnvironmentsScreen";
import { EnvLogScreen } from "../features/moodLog/screens/EnvLogScreen";
import { MoodGraphScreen } from "../features/moodLog/screens/MoodGraphScreen";
import { PostsNavigator } from "./PostsNavigator";
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
          <Stack.Screen name="Journal" component={PostsNavigator} />
          <Stack.Screen name="Graph" component={MoodGraphScreen} />
          <Stack.Screen name="Environments" component={EnvironmentsScreen} />
        </Stack.Navigator>
      </PostsContextProvider>
    </LogsContextProvider>
  );
};