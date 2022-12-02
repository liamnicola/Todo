import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledRootDiv = styled.div`
    background-color: green;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50%;
    border-radius: 25px;
    font-size: 18pt
  `;

const StyledP = styled.p`
    align-items: center;
`

function Todos(props){
    const {due, todo} = props;

    return (
        <StyledRootDiv>
        <StyledP>{todo} due on: {due}</StyledP>
        </StyledRootDiv>
    )
}

export default Todos;