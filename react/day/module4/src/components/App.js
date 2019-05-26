import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home/Home';
import Abouts from './About/About';
import Header from './Header/Header';

export default class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Abouts} />
        <Route
          path="/about/:id"
          render={props => (
            <div>
              {props.match.params.id}
              <button type="button" onClick={() => props.history.goBack()}>
                Go back
              </button>
              <button type="button" onClick={() => props.history.push('/')}>
                Home
              </button>
            </div>
          )}
        />
      </Router>
    );
  }
}
