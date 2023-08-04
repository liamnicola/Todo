import React from "react";
import Todos from "../Components/Todos";
import moment from "moment";
import Time from "../Components/Time";

function Home(props) {
  const date = moment().format("dddd DD MMMM YYYY");
  const { todo } = props;
  return (
    <div>
      <h1>{date}</h1>
      <Time />

      <Todos todo={todo} />
    </div>
  );
}

export default Home;
