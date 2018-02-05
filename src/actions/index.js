import nanoid from 'nanoid';
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nanoid(),
    text,
  });

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter,
  });

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id,
  });
