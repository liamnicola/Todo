import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";
import useAuth from "../services/firebase/useAuth";
import { useHistory } from "react-router-dom";
import useTodo from "../services/firebase/useTodo";
import { ref } from "yup";
import { collection, deleteDoc, getFirestore, doc } from "firebase/firestore";

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
const StyledDate = styled.p`
  display: flex;
  font-style: italic
  font-size: 20px;
`;

function FullTodos() {
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
        todos.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todos);
    }
  };

  const deleteTodo = async (id) => {
    const todoDoc = doc(db, "todos", id);
    await deleteDoc(todoDoc);
    setTodos(todos);
  };

  useEffect(() => {
    getTodoData();
  }, []);

  //const sorted = [...todos].sort((a, b) => a.date - b.date);

  const handleEdit = (id) => {
    console.log("edit", id);
  };

  const amount = todos.length;
  let displayAmount = 0;
  if (amount > 0) {
    displayAmount = amount + " Tasks Left To Complete:";
  } else if (amount == 1) {
    displayAmount = amount + " Task Left To Complete:";
  } else {
    displayAmount = " No Tasks Left To Complete";
  }

  return (
    <div>
      <StyledH2>You have {displayAmount}</StyledH2>
      {todos.map((e) => (
        <StyledRootDiv>
          <StyledH2>{e.name}</StyledH2>
          <StyledH3>{e.date}</StyledH3>
          <StyledP>{e.note}</StyledP>
          <StyledButtonDiv>
          <StyledButton onClick={handleEdit}>Edit</StyledButton>
          <StyledButton
            onClick={() => {
              deleteTodo(e.id);
            }}
          >
            Delete
          </StyledButton>
          </StyledButtonDiv>
        </StyledRootDiv>
      ))}
    </div>
  );
}

FullTodos.propTypes = {
  todo: PropTypes.array.isRequired,
};

export default FullTodos;
