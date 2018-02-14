import nanoid from 'nanoid';

const fakeDatabase = {
  todos: [
    {
      id: nanoid(),
      text: 'hey',
      completed: true,
    },
    {
      id: nanoid(),
      text: 'ho',
      completed: true,
    },
    {
      id: nanoid(),
      text: `let's go`,
      completed: false,
    },
  ],
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
  delay(2000).then(() => {
    switch(filter) {
      case 'all':
        return fakeDatabase.todos;
      case 'active':
        return fakeDatabase.todos.filter(t => !t.completed);
      case 'completed':
        return fakeDatabase.todos.filter(t => t.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });