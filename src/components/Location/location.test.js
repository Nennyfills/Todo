import React from "react";
import Location from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const renderLocation = () =>
  render(
    <Location
      location={{
        street: { name: "Olive", number: 987 },
        postcode: 89988,
        state: "Berlin",
        city: "Berlin",
        country: "Germary"
      }}
    />
  );

it("Should render the location ", () => {
  renderLocation();
  const location = screen.getByTestId("location-id");
  expect(location).toHaveTextContent("89988");
  expect(location).toHaveTextContent("Germary");
  expect(location).toHaveTextContent("Berlin");
  expect(location).toHaveTextContent("Olive");
  expect(location).toHaveTextContent("987");
});
