import { TODOS_ADD, TODOS_REMOVE, TODOS_ACTIVE } from '../../utils/constats';

const initialTodos = [
  {
    title: 'todo 1',
    description: 'descr',
    id: 'adsasdad',
    isCompleted: false,
    cost: 40.5,
  },
  {
    title: 'todo 2',
    description: 'deasdasdasdscr',
    id: 'aoiqwsdad',
    isCompleted: true,
    cost: 77.3,
  },
];

const todosReducer = (state = initialTodos, { type, payload }) => {
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
