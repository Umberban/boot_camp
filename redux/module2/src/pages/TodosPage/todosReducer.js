import { TODOS_ADD, TODOS_REMOVE, TODOS_ACTIVE } from '../../utils/constats';

const todosReducer = (state = [], { type, payload }) => {
  switch (type) {
    case TODOS_ADD:
      return [...state, payload];
    case TODOS_REMOVE:
      return state.filter(el => el.id !== payload);
    case TODOS_ACTIVE:
      return state.map(el => {
        if (el.id === payload) {
          return {
            ...el,
            isComplited: !el.isComplited,
          };
        }
        return el;
      });

    default:
      return state;
  }
};

export default todosReducer;
