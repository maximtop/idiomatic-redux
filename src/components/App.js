import React from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

const App = ({ match }) => {
  return (
    <div className="col-5 pt-5">
      <AddTodo/>
      <VisibleTodoList filter={ match.params.filter || 'all' }/>
      <Footer/>
    </div>
  );
};

export default App;
