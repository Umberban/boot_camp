import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Controls.module.css';
import { addCart } from '../Cart/CartActions';

class Controls extends Component {
  state = { counter: 0 };

  onIncrement = () => {
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  };

  onDecrement = () => {
    this.setState(state => {
      if (state.counter > 1) {
        return { counter: state.counter - 1 };
      }
      return state.counter;
    });
  };

  onHandleAdd = () => {
    const { addCart, data } = this.props;
    const newData = { ...data };
    newData.count = this.state.counter;
    addCart(newData);
  };

  render() {
    const { counter } = this.state;
    // const { addCart, data } = this.props;
    return (
      <>
        <div className={styles.controlsButtons}>
          <button
            onClick={this.onDecrement}
            className={styles.button}
            type="button"
          >
            -
          </button>
          <span>{counter}</span>
          <button
            onClick={this.onIncrement}
            className={styles.button}
            type="button"
          >
            +
          </button>
        </div>
        <button onClick={this.onHandleAdd} type="button" className={styles.add}>
          Add
        </button>
      </>
    );
  }
}

const mapDispatchToProps = { addCart };

export default connect(
  null,
  mapDispatchToProps,
)(Controls);
