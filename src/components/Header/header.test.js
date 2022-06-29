import React from "react";
import Header from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const config = {
  completed_all: false,
  select_all: false,
  todos: [],
  sorting: false
};
const todos = [{ completed: false }, { completed: false }];
const data = [];
const handleClick = jest.fn();
const renderHeader = () =>
  render(
    <Header
      todos={todos}
      data={data}
      config={config}
      sortValue={"default"}
      onSortChange={handleClick}
      onToggleAll={handleClick}
    />
  );

it("Should render the header ", () => {
  renderHeader();
  const header = screen.getByTestId("header");
  expect(header).toHaveClass("header");
  expect(header).toHaveTextContent("Completed Todos 0 / 2");
  expect(header).toHaveTextContent("Sort by");
  expect(header).toHaveTextContent("Complete all");
  expect(header).toHaveTextContent("default");
});

it("Should render checkbox in a header", () => {
  renderHeader();
  const checkbox = screen.getByTestId("header-input");
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).toHaveAttribute("type", "checkbox");
});

it("Should render select in a header", () => {
  renderHeader();
  const select = screen.getByTestId("header-select");

  expect(select).toBeInTheDocument();
  expect(select).toHaveDisplayValue(["default"]);
});
