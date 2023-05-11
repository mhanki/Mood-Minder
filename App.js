import { ThemeProvider } from 'styled-components';
import { theme } from './src/theme';
import { Navigation } from './src/navigation';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}
