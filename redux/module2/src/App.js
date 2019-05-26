import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import TodosPage from './pages/TodosPage/TodosPage';
import Store from './store';

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <Route path="/" component={TodosPage} />
      </Router>
    </Provider>
  );
};

export default App;
