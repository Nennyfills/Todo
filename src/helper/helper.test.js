import "@testing-library/jest-dom";

import { getNames, getSortingStrategy } from ".";
import { allTodo, todos1 } from "../test/testData";

describe("Helper", () => {
  it("getNames No name when no payload is passed", () => {
    const result = getNames({});
    expect(result).toEqual("No name");
  });
  it("getNames name when payload is passed", () => {
    const result = getNames(todos1);
    expect(result).toEqual("Mr Philippe Lo");
  });

  it("get Sorting Strategy that are completed", () => {
    const result = getSortingStrategy({
      sortValue: "completed",
      todos: allTodo
    });
    console.log(result, "result");

    result.map((value) => expect(value.completed).toEqual(true));
  });

  it("get all default data", () => {
    const result = getSortingStrategy({ todos: allTodo });
    expect(result).toBeDefined();
  });
});
