import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoForm.module.css';

const TodosForm = ({ onHandleInput, onHandleSubmit }) => {
  return (
    <form action="" className={styles.form}>
      <input
        onChange={onHandleInput}
        type="text"
        name="title"
        placeholder="title"
      />
      <input
        onChange={onHandleInput}
        type="text"
        name="description"
        placeholder="description"
      />
      <button type="submit" onClick={onHandleSubmit}>
        HIT ME
      </button>
    </form>
  );
};

TodosForm.propTypes = {
  onHandleInput: PropTypes.func.isRequired,
  onHandleSubmit: PropTypes.func.isRequired,
};

export default TodosForm;
