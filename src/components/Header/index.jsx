import React from "react";
import "./header.css";

const Header = ({
  todos,
  data,
  config,
  onToggleAll,
  sortValue,
  onSortChange
}) => {
  const completedTodosCount = todos.filter((todo) => todo.completed).length;
  const areAllTodosCompleted = completedTodosCount === data?.length;

  const onChangeHandler = (event) => {
    onSortChange(event.target.value);
    config.sorted = true;
  };

  return (
    <div className="header" data-testid="header">
      <span data-testid="header-lenght">
        Completed Todos {completedTodosCount} / {todos.length}
      </span>

      <div className="select-container">
        <span className="header-sort_label" data-testid="header-label">
          Sort by
        </span>
        <select
          data-testid="header-select"
          className="header-sort_select"
          value={sortValue}
          onChange={(event) => onChangeHandler(event)}
        >
          <option value="">default</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div>
        <span className="header-toggle_label" data-testid="header-toggle-label">
          Complete all
        </span>
        <input
          data-testid="header-input"
          type="checkbox"
          checked={areAllTodosCompleted}
          onChange={() => onToggleAll(areAllTodosCompleted)}
        />
      </div>
    </div>
  );
};

export default Header;
