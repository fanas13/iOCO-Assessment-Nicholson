import React from 'react';
import ReactDOM from 'react-dom';
import themeConfig from './config/theme';
import App from './containers/AppShell/App';
import './index.css';

ReactDOM.render((
  <App theme={themeConfig} />
), document.getElementById('root'));