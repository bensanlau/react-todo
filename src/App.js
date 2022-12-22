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

  useEffect(() => {
    localStorage.setItem('react-todos', JSON.stringify(todos));
  });

  return (
    <section className="todoapp">
      <Header onAddTodo={handleAdd} />
      <List
        todos={todos}
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
          onClear={() => setTodos(todos.filter((todo) => !todo.completed))}
          todos={todos}
        />
      )}
    </section>
  );
}

export default App;
