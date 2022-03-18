import { createTheme } from '@material-ui/core/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '#169FA9',
    },
    error: {
      main: '#ea1946'
    }
  }
});

// Convenience to view composed theme in console
export default theme;