import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/theme";
import { Navigation } from "./src/navigation";
import { useFonts } from 'expo-font';
import { Lora_400Regular } from '@expo-google-fonts/lora';

export default function App() {
  const [fontsLoaded] = useFonts({
    Lora_400Regular
  });

  if(!fontsLoaded){
    return null; 
  };

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
          <Navigation />
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
