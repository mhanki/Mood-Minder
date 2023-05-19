import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/theme';
import { LogsContextProvider } from './src/services/logs/logs.context';
import { PostsContextProvider } from './src/services/posts/posts.context';
import { Navigation } from './src/navigation';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <LogsContextProvider>
          <PostsContextProvider>
            <Navigation />
          </PostsContextProvider>
          </LogsContextProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
