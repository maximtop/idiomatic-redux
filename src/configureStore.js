import todoApp from './reducers';
import { createStore } from 'redux';

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  return (action) => {
    if (!console.group) {
      return rawDispatch(action);
    }
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    const returnValue = rawDispatch(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd();
    return returnValue;
  };
};

const configureStore = () => {
  const devtools = window.__REDUX_DEVTOOLS_EXTENSION__;
  const store = createStore(todoApp, devtools && devtools());
  if (process.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store);
  }
  
  return store;
};

export default configureStore;
