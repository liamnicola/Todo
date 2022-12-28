import React from "react";
import TodoForm from "../Components/CreateTodo";
import Todos from "../Components/Todos";

const Create = (props) => {
  const { todo } = props;
  return (
    <div>
      <h1>Create a Task</h1>

      <TodoForm />
    </div>
  );
};

export default Create;
