import {types} from '../types/types';

const initialState = {
    todos: [],
    todoSelected: {},
    originalTodos: [],
};
export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.getTodos:
          return {
            ...state,
            todos: action.payload,
            originalTodos: action.payload,
          };
        case types.setTodo:
          return {
            ...state,
            todoSelected: action.payload,
          };
        case types.setTodos:
          return {
            ...state,
            todos: action.payload,
          };
        case types.deleteTodo:
          const initialArray = state.todos;
          const origArray = state.originalTodos;
          const newInitialTodos = initialArray.filter(
            (todo) => action.payload.data.id !== todo.id
          );
          const newOrigTodos = origArray.filter(
            (todo) => action.payload.data.id !== todo.id
          );
          return {
            ...state,
            todos: newInitialTodos,
            originalTodos: newOrigTodos,
          };
        default:
          return state;
      }
};
