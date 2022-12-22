import Item from './Item';

export default function List({
  todos,
  filterView,
  isCheckAll,
  onDeleteTodo,
  onChangeTodo,
  onCheckAll,
}) {
  let filteredTodos = todos;
  if (filterView === 'active') {
    filteredTodos = todos.filter((todo) => !todo.completed);
  } else if (filterView === 'completed') {
    filteredTodos = todos.filter((todo) => todo.completed);
  }

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={isCheckAll}
        onChange={() => onCheckAll(!isCheckAll)}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {filteredTodos.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDelete={onDeleteTodo}
            onChange={onChangeTodo}
          />
        ))}
      </ul>
    </section>
  );
}
