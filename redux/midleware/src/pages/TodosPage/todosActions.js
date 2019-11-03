import { TODOS_ADD, TODOS_REMOVE, TODOS_ACTIVE } from '../../utils/constats';

export const addTodo = todo => ({
  type: TODOS_ADD,
  payload: todo,
});

export const removeTodo = id => ({
  type: TODOS_REMOVE,
  payload: id,
});

export const activeTodo = id => ({
  type: TODOS_ACTIVE,
  payload: id,
});
