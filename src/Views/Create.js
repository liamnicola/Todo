import React from "react";
import CreateTodo from "../Components/CreateTodo";

const handleSubmit = (todo) => {
  console.log(todo);
};

const Create = () => {
  return (
    <div>
      <h1>Create a Task</h1>

      <CreateTodo onSubmit={handleSubmit} />
    </div>
  );
};

export default Create;
