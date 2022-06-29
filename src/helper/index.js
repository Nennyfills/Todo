export const getNames = (todo) => {
  if (Object.keys(todo?.name || {})?.length > 1) {
    todo.fullName = `${todo?.name?.title || ""} ${todo?.name?.first || ""} ${
      todo?.name?.last || ""
    }`;
  } else {
    todo.fullName = "No name";
  }
  return todo.fullName;
};

export const getSortingStrategy = ({ sortValue, todos }) => {
  switch (sortValue) {
    case "title":
      return todos?.sort((firstValue, secondValue) =>
        firstValue.title.localeCompare(secondValue.title)
      );
    case "completed":
      return todos?.filter((value) => value?.completed);
    default:
      return todos?.sort(
        (firstValue, secondValue) => firstValue.id - secondValue.id
      );
  }
};
