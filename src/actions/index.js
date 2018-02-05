import nanoid from 'nanoid';
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nanoid(),
    text,
  });

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id,
  });
