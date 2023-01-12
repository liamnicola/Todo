import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";
import useAuth from "../services/firebase/useAuth";
import { Link, useHistory } from "react-router-dom";
import useTodo from "../services/firebase/useTodo";
import { ref } from "yup";
import { collection, deleteDoc, getFirestore } from "firebase/firestore";
//#c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1

const StyledRootDiv = styled.div`
background: linear-gradient(to right top, #BF81A0, #8766A7, #5694A0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  border-radius: 25px;
  font-size: 18pt;
  position: relative;
  margin-left: 25%;
  margin-bottom: 15px;
`;


const StyledH2 = styled.h2`
  justify-content: center;
  display: flex;
  font-weight: bold;
  margin-top: 20px;
`;
const StyledH3 = styled.h3`
  display: flex;
  justify-content: center;
  margin-top: 0px;
  a:-webkit-any-link {
    text-decoration: underline;
    color: white;
  }
`;

const StyledP = styled.p`
  display: flex;
  font-style: italic;
  margin-top: 0px;
  
`;

/*function timeLeft(due, props){
    const date = new Date().getDate();
    const countdown = due

    FIND OUT HOW TO CONVERT DATES TO BE SUBTRACTED

    time = date - countdown  THEN CONVERT TO DAYS 


}
*/
/*const Todo = () => {
  const history = useHistory();
  const { user } = useAuth();
  const { createTodo } = useTodo();
  const handleSubmit = async (checkin) => {
    const td = {
      ...todo,
      ...{
        userId: user.uid,
        userName: user.displayName || user.email,
      },
    };
    try {
      await createTodo(td);
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };
  return <div></div>;
}; */

function Todos() {
  const db = getFirestore();
  const { user } = useAuth();
  const { getTodos } = useTodo();
  const history = useHistory();
  const [todos, setTodos] = useState([]);

  const todoCollectionRef = collection(db, "todos");

  const getTodoData = async () => {
    const todoSnap = await getTodos();
    let todos = [];
    if (todoSnap.size) {
      todoSnap.forEach((doc) => {
        todos.push({ ...doc.data() });
      });
      setTodos(todos);
    }
  };

  const deleteTodo = (event) => {
    deleteDoc(todoCollectionRef);
  };

  useEffect(() => {
    getTodoData();
  }, []);

  const sorted = [...todos].sort((a, b) => a.date - b.date);
  const limitSorted = sorted.slice(0, 3);
  const number = limitSorted.length;

  /*const days = limitSorted.map((e) => e.date)
  console.log(days)
  const test = days.getDay()
  console.log(test)

  function daysBetween(date){
    const currentDate = new Date();
    //let todoDate = todos.map((e) => (e.name))
    //console.log(todoDate)
  
    let daysLeft = date.getDay() - currentDate
    console.log(daysLeft)
  }*/


  function textDisplay(number){
    if(number === 0 ) {
      return (<h3>You currently have no tasks,{" "}
      <Link to="/Create">Create tasks here!</Link>
      </h3>
      )
    } else if (number > 0){
      return <h1>Tasks to start:</h1>
    }
  }

  return (
    <div>
      <StyledH3>{textDisplay(number)}</StyledH3>
      {limitSorted.map((e) => (
        <StyledRootDiv>
        <StyledH2>{e.name}</StyledH2>
        <StyledH3>{e.date}</StyledH3>
        <StyledP>{e.note}</StyledP>
      </StyledRootDiv>
      ))}
    </div>
  );
}

Todos.propTypes = {
  todo: PropTypes.array.isRequired,
};

export default Todos;
