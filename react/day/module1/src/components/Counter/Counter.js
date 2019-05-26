import React from 'react';
import PropTypes from 'prop-types';

import styles from './Counter.module.css';

const Counter = ({ count, onDecrement, onIncrement }) => (
  <div>
    <div className={styles.main}>
      <button onClick={onDecrement} className={styles.btn}>
        -
      </button>
      <span className={styles.pret}>{count}</span>
      <button onClick={onIncrement} className={styles.btn}>
        +
      </button>
    </div>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

Counter.defaultProps = {
  count: 0,
};
export default Counter;
