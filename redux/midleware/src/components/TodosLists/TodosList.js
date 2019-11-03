import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoList.module.css';
import Controls from '../Controls/Controls';

const TodosList = ({ data, onHandleDelete, onHandleChecked }) => {
  return (
    <ul className={styles.todoList}>
      {data.map(el => (
        <li key={el.id} className={styles.todo}>
          <input
            defaultChecked={el.isComplited}
            type="checkbox"
            onChange={() => onHandleChecked(el.id)}
            className={styles.checkbox}
          />
          <h2>{el.title}</h2>
          <span>{el.description}</span>
          <button
            className={styles.close}
            type="button"
            onClick={() => onHandleDelete(el.id)}
          >
            X
          </button>
          <div className={styles.controls}>
            <Controls data={el} />
          </div>
        </li>
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onHandleDelete: PropTypes.func.isRequired,
  onHandleChecked: PropTypes.func.isRequired,
};

export default TodosList;
