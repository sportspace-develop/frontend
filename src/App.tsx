import {ThemeProvider} from '@mui/material';

import Login from './pages/Login.tsx';
import createTheme from './theme';

const App = () => {
  const theme = createTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </>
  );
};

export default App;
