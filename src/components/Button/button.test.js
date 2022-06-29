import Button from "./index";
import { render, fireEvent, screen } from "@testing-library/react";

test("Should render a button when loading", () => {
  render(<Button loading>I am secondary</Button>);
  const secondaryButton = screen.getByTestId("loading");
  expect(secondaryButton).toBeDefined();
});

test("Should onClick prop when clicked", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>click</Button>);
  fireEvent.click(screen.getByText(/click/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
