export default function Footer({ todos, filterView, onFilterViewChange, onClear }) {
  const todoCount = todos.filter((todo) => !todo.completed).length;
  const views = [
    { label: 'All', href: '#/' },
    { label: 'Active', href: '#/active' },
    { label: 'Completed', href: '#/completed' },
  ];

  function handleView(e) {
    onFilterViewChange(e.target.textContent.toLowerCase());
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todoCount}</strong> item
        {todoCount === 1 ? '' : 's'} left
      </span>
      <ul className="filters">
        {views.map((view) => (
          <li key={view.label.toLowerCase()}>
            <a
              onClick={handleView}
              href={view.href}
              className={filterView === view.label.toLowerCase() ? 'selected' : ''}
            >
              {view.label}
            </a>
          </li>
        ))}
      </ul>
      {todos.some((todo) => todo.completed) && (
        <button className="clear-completed" onClick={() => onClear()}>
          Clear completed
        </button>
      )}
    </footer>
  );
}
