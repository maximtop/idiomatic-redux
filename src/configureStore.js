import todoApp from './reducers';
import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
  const persistedState = loadState();
  const devtools = window.__REDUX_DEVTOOLS_EXTENSION__;
  const store = createStore(todoApp, persistedState, devtools && devtools());
  
  store.subscribe(throttle(() => {
    saveState({todos: store.getState().todos});
  }, 1000));
  
  return store;
};

export default configureStore;
