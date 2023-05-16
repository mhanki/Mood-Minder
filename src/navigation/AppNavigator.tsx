import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { MoodLogScreen } from "../features/moodLog/screens/MoodLogScreen";
import { JournalScreen } from "../features/journal/screens/JournalScreen";
import { EnvironmentsScreen } from "../features/environments/screens/EnvironmentsScreen";
import { colors } from "../theme/colors";
import { space } from "../theme/spacing";
import { ParamListBase, RouteProp } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const TAB_ICON: { [key: string]: keyof typeof Ionicons.glyphMap; } = {
  "Log": "happy-outline",
  "Journal": "journal-outline",
  "Environments": "pie-chart-outline",
};

const createScreenOptions = ({ route }: { route: RouteProp<ParamListBase, string> }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ size, color }: {
      size: any;
      color: any;
  }) => (
      <Ionicons 
        name={iconName} 
        size={size} 
        color={color} 
        backgroundColor={colors.bg.primary} 
        paddingTop={space.small} 
      />
    ),
    tabBarActiveTintColor: colors.ui.primary,
    tabBarInactiveTintColor: colors.ui.secondary,
    tabBarStyle: { 
      height: 60
    },
    tabBarItemStyle: { marginBottom: space.small},
    /* headerStyle: { 
      backgroundColor: colors.bg.secondary,
    }, 
    headerTitleStyle: { color: colors.text.inverse } */
  };
};

export const AppNavigator = () => {
  return(
    <Tab.Navigator screenOptions={createScreenOptions} >
      <Tab.Screen name="Log" component={MoodLogScreen} />
      <Tab.Screen name="Journal" component={JournalScreen} />
      <Tab.Screen name="Environments" component={EnvironmentsScreen} />
    </Tab.Navigator>
  )
};