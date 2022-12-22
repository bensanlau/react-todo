import Item from './Item';

export default function List({
  todos,
  isCheckAll,
  onDeleteTodo,
  onChangeTodo,
  onCheckAll,
}) {
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
        {todos.map((item) => (
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
