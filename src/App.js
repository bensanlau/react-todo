import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import List from './List';

function App() {
  const [todos, setTodos] = useState(() => {
    if (localStorage.getItem('react-todos')) {
      return JSON.parse(localStorage.getItem('react-todos'));
    } else {
      return [];
    }
  });

  function handleTodo(todo) {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        label: todo,
        completed: false,
      },
    ]);
  }

  function handleDelete(todoId) {
    setTodos(todos.filter((item) => item.id !== todoId));
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

  function handleCheckAll(isCheckAll) {
    setTodos(
      todos.map((todo) => {
        return { ...todo, completed: isCheckAll };
      })
    );
  }

  useEffect(() => {
    localStorage.setItem('react-todos', JSON.stringify(todos));
  });

  return (
    <section className="todoapp">
      <Header onAddTodo={handleTodo} />
      <List
        todos={todos}
        isCheckAll={todos.every((todo) => todo.completed === true)}
        onChangeTodo={handleChange}
        onDeleteTodo={handleDelete}
        onCheckAll={handleCheckAll}
      />
      {todos.length > 0 && <Footer />}
    </section>
  );
}

export default App;
