import { createTheme } from '@material-ui/core/styles';
const theme = createTheme({
  // please note I copies the theme from the MTN website
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '##122331',
    },
    error: {
      main: '#ea1946'
    }
  }
});

// Convenience to view composed theme in console
export default theme;