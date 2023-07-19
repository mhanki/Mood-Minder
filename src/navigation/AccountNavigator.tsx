import { StatusBar } from 'react-native';
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { colors } from "../theme/colors";
import { LoginScreen } from '../features/account/screens/LoginScreen';
import { MainScreen } from '../features/account/screens/MainScreen';
import { RegisterScreen } from '../features/account/screens/RegisterScreen';

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return(
    <>
      <StatusBar backgroundColor={colors.bg.primary} barStyle="light-content" />
      <Stack.Navigator screenOptions={{ 
        ...TransitionPresets.SlideFromRightIOS,
        headerStyle: { backgroundColor: colors.bg.primary },
        headerTitle: "",
        headerTintColor: "white",
        headerShadowVisible: false
      }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </>
  );
};