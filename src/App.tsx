import React from 'react';
import './App.css';
import Routes from "./routes";
import { Router } from 'react-router-dom';
import history from './services/history';
import { ApolloProvider } from '@apollo/react-hooks';
import api from "./services/api";

function App() {
  return (
      <ApolloProvider client={api}>
          <Router history={history}>
            <Routes/>
          </Router>
      </ApolloProvider>
  );
}

export default App;
