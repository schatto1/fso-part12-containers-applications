import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

import Todo from "./Todo";

test("renders content", () => {
  const todo = {
    text: "This is a test todo",
    done: false,
  };

  render(
    <Todo
      todo={todo}
      doneInfo={() => console.log("This todo is done")}
      notDoneInfo={() => console.log("this todo is not done")}
    />,
  );

  const testTodo = screen.getByText(
    "This is a test todo",
  );
  expect(testTodo).toBeDefined();
});