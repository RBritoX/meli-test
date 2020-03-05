import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import history from '~/services/history';
import Routes from './routes.jsx';
import Header from '~/components/Header';

function App() {
  return (
      <BrowserRouter>
        <Router  history={history}>
        <GlobalStyle />
          <Header />
          <Routes />
        </Router>
      </BrowserRouter>
  );
}

export default App;
