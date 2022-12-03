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
    margin-bottom- 100px;

`

/*function timeLeft(due, props){
    const date = new Date().getDate();
    const countdown = due

    FIND OUT HOW TO CONVERT DATES TO BE SUBTRACTED

    time = date - countdown  THEN CONVERT TO DAYS 


}
*/
function Todos(props){

    const {todo} = props;
    const singleTodo = todo.map((e) => <StyledRootDiv key={e.id}>{e.name + ' ' + e.due}</StyledRootDiv>)
    return (
        
        <div>{singleTodo}</div>
        
    )
}

Todos.propTypes = {
    todo: PropTypes.array.isRequired
  };

export default Todos;