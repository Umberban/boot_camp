import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './counterActions';

class HomePage extends Component {
  state = {};

  render() {
    const { counter, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <h1>Home Page</h1>
        <button type="button" onClick={() => onDecrement(3)}>
          -
        </button>
        <span>{counter}</span>
        <button type="button" onClick={() => onIncrement(5)}>
          +
        </button>
      </div>
    );
  }
}

const stateToProps = state => ({
  counter: state.counter,
});

const dispatchToProps = dispatch => ({
  onIncrement(count) {
    dispatch(increment(count));
  },
  onDecrement(count) {
    dispatch(decrement(count));
  },
});

export default connect(
  stateToProps,
  dispatchToProps,
)(HomePage);
