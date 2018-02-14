import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import configureStore from './configureStore';
import { fetchTodos } from './api';

const store = configureStore();

fetchTodos('all').then(todos => console.log(todos));

render(
  <Root store={store}/>,
  document.getElementById('root'),
);
