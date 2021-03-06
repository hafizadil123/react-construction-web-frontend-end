/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch } from 'react-router-dom';
import Routes from '../../routes/routes';
import GlobalStyle from '../../global-styles';
// Import root app
export default function App() {
  return (
    <div>
      <Switch>
        <Routes />
      </Switch>

      <GlobalStyle />
    </div>
  );
}
