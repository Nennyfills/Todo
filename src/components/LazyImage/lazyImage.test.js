import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LazyImage from "./index";

const renderToDo = () => {
  render(
    <LazyImage
      src="https://randomuser.me/api/portraits/women/1.jpg"
      alt="Avatar"
    />
  );
};

describe("<LazyImage />", () => {
  it("Should render the todo", () => {
    renderToDo();
    expect(screen.getByTestId("image")).toHaveClass("lazy-image");
    expect(screen.getByTestId("image-holder")).toHaveClass("lazy-image_image");
    expect(screen.getByTestId("svg")).toBeDefined();
    expect(screen.getByLabelText("Avatar")).toBeDefined();
  });
});
