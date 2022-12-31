import React, { useEffect } from "react";
import FullTodos from "../Components/FullTodos";
import useTodo from "../services/firebase/useTodo";

function Schedule() {
  return (
    <div>
      <h1>Full Schedule:</h1>
      <FullTodos />
    </div>
  );
}

export default Schedule;
