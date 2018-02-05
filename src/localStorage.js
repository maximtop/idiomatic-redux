export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if( serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('state', serialisedState);
  } catch (e) {
    // ignore errors
  }
};