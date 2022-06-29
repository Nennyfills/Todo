import { useState, useEffect, useMemo } from "react";

import { useGetTodos } from "../http";
import { Header, Todo, Button, NetworkNotification } from "../components";

import { getSortingStrategy } from "../helper";
import "./app.css";

var config = require("../config.json");

export default function App() {
  const [limit, setLimit] = useState(40);
  const [todos, setTodos] = useState([]);
  const [sortValue, setSortValue] = useState("");

  const { data, error, isLoading, isFetching } = useGetTodos({ limit });

  useEffect(() => {
    if (!data) return;
    setTodos(data.results);
  }, [data]);

  const sortedTodos = useMemo(() => getSortingStrategy({ sortValue, todos }), [
    todos,
    sortValue
  ]);

  const handleToggle = (areAllTodosCompleted) => {
    setTodos(
      todos.map((todo) => ({
        ...todo,
        completed: !areAllTodosCompleted
      }))
    );
  };

  const handleToDos = (idx) => {
    setTodos((curr) => {
      return curr.map((item, i) =>
        i === idx ? { ...item, completed: !item.completed } : item
      );
    });
  };
  if (isLoading) {
    return (
      <div className="app-loading" data-testid="loading-id">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-error" data-testid="error-id">
        {error}
      </div>
    );
  }

  return (
    <div className="app" data-testid="app-id">
      <NetworkNotification />
      <Header
        todos={todos}
        data={data}
        config={config}
        sortValue={sortValue}
        onSortChange={setSortValue}
        onToggleAll={handleToggle}
      />
      <div className="grid">
        {sortedTodos.map((todo, idx) => (
          <Todo
            key={todo.login.uuid}
            todo={todo}
            config={config}
            isCompleted={todo.completed}
            onChange={() => handleToDos(idx)}
          />
        ))}
      </div>
      <Button loading={isFetching} onClick={() => setLimit(limit + 10)}>
        Load More
      </Button>
    </div>
  );
}
