import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/theme';
import { Navigation } from './src/navigation';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};
