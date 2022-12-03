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
    //const r = date.setDate()
    const {todo} = props;
    return (
        <div>
            <h1>{date}</h1>
            <h1>Tasks to Start:</h1>

            <Todos todo={todo}/>



        </div>
    )
}

export default Home;