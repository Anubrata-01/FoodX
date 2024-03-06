import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import { Store } from './Redux Store/AppStore';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    
  </Provider>
);

