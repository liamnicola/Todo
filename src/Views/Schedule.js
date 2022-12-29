import React, { useEffect } from "react";
import FullTodos from "../Components/FullTodos";
import useTodo from "../services/firebase/useTodo";

function Schedule(props) {
  const { todo } = props;
  const { getTodos } = useTodo();

  const count = async () => {
    const countSnap = await getTodos();
    let todoCount = countSnap.size;
    let displayCount = 0;
    console.log(todoCount);
    if (todoCount > 0) {
      displayCount = todoCount + " Tasks Left";
    } else if (todoCount === 1) {
      displayCount = todoCount + " Task Left";
    } else {
      displayCount = " No remaining tasks to complete ";
    }
    console.log(displayCount);
    return displayCount;
  };
  console.log(count);

  /*useEffect(() => {
    count();
  });*/

  //const count = getTodos.size;
  /*console.log(count);
  let displayCount = 0;
  if (count > 1) {
    displayCount = count + " Tasks left";
  } else if (count === 1) {
    displayCount = count + " Task left";
  } else {
    displayCount = " No tasks to complete";
  }*/

  return (
    <div>
      <h1>Full Schedule:</h1>
      <h2> You Have {count}</h2>
      <FullTodos />
    </div>
  );
}

export default Schedule;
