import { useState } from 'react';

export default function Item({ item, onDelete, onChange }) {
  const [title, setTitle] = useState(item.label);
  const [isEditing, setIsEditing] = useState(false);

  function classNames() {
    let classNames = [];
    if (item.completed) {
      classNames.push('completed');
    }
    if (isEditing) {
      classNames.push('editing');
    }
    return classNames.join(' ');
  }

  function handleChange() {
    item.completed = !item.completed;
    onChange(item);
  }

  function saveEdit() {
    item.label = title;
    onChange(item);
    setIsEditing(false);
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      saveEdit();
    }
  }

  return (
    <li className={classNames()}>
      <div className="view">
        <input
          onChange={handleChange}
          className="toggle"
          type="checkbox"
          checked={item.completed}
        />
        <label onDoubleClick={() => setIsEditing(true)}>{item.label}</label>
        <button className="destroy" onClick={() => onDelete(item.id)}></button>
      </div>
      {isEditing && (
        <input
          autoFocus
          className="edit"
          value={title}
          onBlur={() => saveEdit()}
          onKeyDown={handleKeyDown}
          onChange={(e) => setTitle(e.target.value)}
        />
      )}
    </li>
  );
}
