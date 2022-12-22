import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import List from './List';

function App() {
  const [filterView, setFilterView] = useState(() => {
    const hash = window.location.hash.split('#/')[1];
    return hash === '' ? 'all' : hash;
  });
  const [todos, setTodos] = useState(() => {
    if (localStorage.getItem('react-todos')) {
      return JSON.parse(localStorage.getItem('react-todos'));
    } else {
      return [];
    }
  });

  function handleAdd(todo) {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        label: todo,
        completed: false,
      },
    ]);
  }

  function handleChange(todo) {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return todo;
        } else {
          return t;
        }
      })
    );
  }

  function handleFilterView(view) {
    setFilterView(view);
  }

  useEffect(() => {
    localStorage.setItem('react-todos', JSON.stringify(todos));
  });

  return (
    <section className="todoapp">
      <Header onAddTodo={handleAdd} />
      <List
        todos={todos}
        filterView={filterView}
        isCheckAll={todos.every((todo) => todo.completed)}
        onChangeTodo={handleChange}
        onDeleteTodo={(todoId) => setTodos(todos.filter((item) => item.id !== todoId))}
        onCheckAll={(isCheckAll) =>
          setTodos(
            todos.map((todo) => {
              return { ...todo, completed: isCheckAll };
            })
          )
        }
      />
      {todos.length > 0 && (
        <Footer
          todos={todos}
          filterView={filterView}
          onClear={() => setTodos(todos.filter((todo) => !todo.completed))}
          onFilterViewChange={handleFilterView}
        />
      )}
    </section>
  );
}

export default App;
