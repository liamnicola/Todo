import React from "react";
import Todos from "../Components/Todos";
import moment from "moment";
import Time from "../Components/Time";

function Home() {
  const date = moment().format("dddd DD MMMM YYYY");
  return (
    <div>
      <h1>{date}</h1>
      <Time />

      <Todos />
    </div>
  );
}

export default Home;
