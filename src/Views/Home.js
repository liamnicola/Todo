import React from "react";
import styled from "styled-components";
import {
    useState,
    useEffect
  } from "react-router-dom";
import PropTypes from "prop-types";
import Todos from "../Components/Todos"



function Home(props){
    const date = new Date().toLocaleDateString();
    const day = new Date().getDay();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const {todo} = props;
    return (
        <div>
            <h1>{date}</h1>
            <h1>Tasks to Start:</h1>

            <Todos due = {date} todo={"web apps"}/>



        </div>
    )
}

export default Home;