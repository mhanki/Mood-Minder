import { ThemeProvider } from 'styled-components';
import { theme } from './src/theme';
import { FeelingsContextProvider } from './src/services/feelings/feelings.context';
import { EnvsContextProvider } from './src/services/envs/envs.context';
import { Navigation } from './src/navigation';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <FeelingsContextProvider>
        <EnvsContextProvider>
          <Navigation />
        </EnvsContextProvider>
      </FeelingsContextProvider>
    </ThemeProvider>
  );
}
