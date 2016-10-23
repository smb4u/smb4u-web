import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
require('file?name=[name].[ext]!./assets/styles.css');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
