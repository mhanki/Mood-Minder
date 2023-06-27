import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/theme';
import { Navigation } from './src/navigation';
import { colors } from './src/theme/colors';

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <ThemeProvider theme={theme}>
          <StatusBar backgroundColor={colors.bg.primary} barStyle="light-content" />
          <Navigation />
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};
