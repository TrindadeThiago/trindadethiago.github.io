import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
};

export default App;
