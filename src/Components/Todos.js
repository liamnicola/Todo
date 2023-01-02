import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";
import useAuth from "../services/firebase/useAuth";
import { useHistory } from "react-router-dom";
import useTodo from "../services/firebase/useTodo";
import { ref } from "yup";
import { collection, deleteDoc, getFirestore } from "firebase/firestore";

const StyledRootDiv = styled.div`
  background: rgb(81, 234, 93);
  background: linear-gradient(
    0deg,
    rgba(81, 234, 93, 1) 0%,
    rgba(34, 195, 121, 1) 98%
  );
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
  justify-content: center;
  display: flex;
  margin-top: 0px;
`;

const StyledRootDivRed = styled.div`
  background-color: red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  border-radius: 25px;
  font-size: 18pt;
`;
const StyledRootDivOrange = styled.div`
  background-color: orange;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  border-radius: 25px;
  font-size: 18pt;
`;

const StyledButton = styled.button`
  font-size: 15px;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 5px;
`;
const StyledButtonDiv = styled.div`
  display: inline-block;
  padding: 0;
  border: 10px;
  
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

  /*const handleDelete = (id) => {
    const deleteTd = deleteTodo();
    deleteTd.delete(id);
    console.log("delete", id);
  };*/

  const handleEdit = (id) => {
    console.log("edit", id);
  };

  const limitSorted = sorted.slice(0, 3);
  /*const singleTodo = todos.map((e) => (
    <StyledRootDiv>
      <h3>{e.name}</h3> <br />
      <p>{e.date}</p>
    </StyledRootDiv>
  ));*/
  //const due = todo.map((e) => e.due);
  // const due1 = moment(due);
  //var date = moment();
  //const countdown = moment(date).subtract(due1).toDate;
  return (
    <div>
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
