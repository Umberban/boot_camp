import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodosHeader.module.css';

const TodosHeader = ({ onHandleChangeFilter, filter }) => {
  return (
    <div className={styles.mid}>
      <button
        className={styles.button}
        onClick={() => onHandleChangeFilter('all')}
        type="button"
        disabled={filter === 'all'}
      >
        ALL
      </button>
      <button
        className={styles.button}
        onClick={() => onHandleChangeFilter('inProgress')}
        type="button"
        disabled={filter === 'inProgress'}
      >
        inProgress
      </button>
      <button
        className={styles.button}
        onClick={() => onHandleChangeFilter('completed')}
        type="button"
        disabled={filter === 'completed'}
      >
        Completed
      </button>
    </div>
  );
};

TodosHeader.propTypes = {
  onHandleChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
export default TodosHeader;
