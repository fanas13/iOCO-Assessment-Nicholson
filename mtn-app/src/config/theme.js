import { createTheme } from '@material-ui/core/styles';
const theme = createTheme({
  palette: {
    secondary: {
      main: '#169FA9',
    },
    primary: {
      main: '#2c8933'
    },
    error: {
      main: '#ea1946'
    }
  }
});

// Convenience to view composed theme in console
export default theme;