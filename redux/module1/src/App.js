import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './components/pages/HomePage/HomePage';
import Store from './store';
import Counter from './components/Counter/Counter';

const App = () => (
  <Provider store={Store}>
    <Router>
      <Route rxact path="/" component={HomePage} />
    </Router>
    <Counter />
  </Provider>
);
export default App;
