import { useState } from 'react';
export default function Header({ onAddTodo }) {
  const [title, setTitle] = useState('');

  function handleKeyDown(e) {
    const target = e.target.value;
    if (target !== '' && e.keyCode === 13) {
      onAddTodo(title);
      e.target.value = '';
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus=""
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </header>
  );
}
