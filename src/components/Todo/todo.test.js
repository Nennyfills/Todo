import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Todo from "./index";
import { todos1 } from "../../test/testData";

const handleClick = jest.fn();

const renderToDo = () => {
  render(<Todo todo={todos1} onChange={handleClick} isCompleted={false} />);
};

describe("<Todo />", () => {
  it("Should render the todo", () => {
    renderToDo();
    const todo = screen.getByTestId("todo-id");
    expect(todo).toHaveClass("todo");
    expect(todo).toHaveTextContent("Mr Philippe Lo");
    expect(todo).toHaveTextContent("Regent Ave");
    expect(todo).toHaveTextContent("Mr Philippe Lo");
    expect(todo).toHaveTextContent("Regent Ave");
    expect(todo).toHaveTextContent(9358);
    expect(todo).toHaveTextContent("Westport");
  });

  it("Should render checkbox in a todo", () => {
    renderToDo();
    const checkbox = screen.getByTestId("todo-input");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute("type", "checkbox");
  });
});
