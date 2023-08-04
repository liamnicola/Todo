import React from "react";
import TodoForm from "../Components/CreateTodo";

const Create = () => {
  /*const { user } = useAuth();
  const { createTodo } = useTodo();
  const handleSubmit = async (todo) => {
    const td = {
      ...todo,
      ...{
        userName: user.email
      }
    };
    try {
      await createTodo(td)
      todo.preventDefault();
    } catch (e) {
      console.log(e)
    }
  }*/
  return (
    <div>
      <h1>Create a Task</h1>
      <TodoForm/>
    </div>
  );
};

export default Create;
