export default function Footer({ todos, onClear }) {
  const todoCount = todos.filter((todo) => !todo.completed).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todoCount}</strong> item
        {todoCount === 1 ? '' : 's'} left
      </span>
      <ul className="filters">
        <li>
          <a href="#/" className="selected">
            All
          </a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      {todos.some((todo) => todo.completed) && (
        <button className="clear-completed" onClick={() => onClear()}>
          Clear completed
        </button>
      )}
    </footer>
  );
}
