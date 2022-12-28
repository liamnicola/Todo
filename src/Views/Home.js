import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react-router-dom";
import PropTypes from "prop-types";
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
      <h1>Tasks to Start:</h1>

      <Todos todo={todo} />
    </div>
  );
}

export default Home;
