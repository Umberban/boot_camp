import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ counter }) => (
  <div>
    <h2>Counter</h2>
    <span>{counter}</span>
  </div>
);

const stateToProps = state => ({
  counter: state.counter,
});

export default connect(stateToProps)(Counter);
