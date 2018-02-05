import React from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

const App = () => {
  return (
    <div className="col-5 pt-5">
      <AddTodo/>
      <VisibleTodoList/>
      <Footer/>
    </div>
  );
};

export default App;
