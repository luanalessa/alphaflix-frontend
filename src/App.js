import React from 'react';
import GlobalStyle from "./styles/GlobalStyle";
import AppProvider from './providers/index.jsx';

import Routes from './routes/index.jsx'

function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <Routes />
    </AppProvider>

  );
}

export default App;
