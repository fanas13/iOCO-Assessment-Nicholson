import { MuiThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import Drawer from './Drawer';

class App extends Component {
  render() {
    // global theme for defining the company colors and font colors 
    const { theme } = this.props
    return(<MuiThemeProvider theme={theme}>
      <Drawer />
    </MuiThemeProvider>)
  }
}

export default App;