import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ServiceStore from './store/ServiceStore';
import UserStore from './store/UserStore';

export const Context = createContext()

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    service: new ServiceStore(),
  }}>
   <App />
  </Context.Provider>, 
  document.getElementById('root')
);


