import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import moment from "moment";

function Time() {
  const [time, setTime] = useState(new moment().format("hh:mm:ss a"));

  function updateTime() {
    setTime(new moment().format("hh:mm:ss a"));
  }

  useEffect(() => {
    const timeID = setInterval(updateTime, 1000);
    return function cleanup() {
      clearInterval(timeID);
    };
  }, []);

  return <h1>{time}</h1>;
}

export default Time;
