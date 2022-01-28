import React from 'react';
import { Provider } from 'react-redux';

import Router from './router';
import { ContextProvider } from './context';
import Store from './store';



function App() {
  const store = process.env.REACT_APP_STORE;

  return (
    <div>
      {
        store === 'redux' ?
        <Provider store={Store}>
          <Router />
        </Provider> :
        <ContextProvider>
          <Router />
        </ContextProvider>
      }
    </div>
  );
}

export default App;
