import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useTodo from "../services/firebase/useTodo";
//#c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1

const StyledRootDiv = styled.div`
  background: linear-gradient(to right top, #bf81a0, #8766a7, #5694a0);
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

const StyledA = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: white;
  width: 100%;
  a:hover {
    background: black;
    border-radius: 250px;
  }
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
};

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
  justify-content: center;
  text-align: center;
`;

function Todos() {
  const { getTodos } = useTodo();
  const [todos, setTodos] = useState([]);

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

  useEffect(() => {
    getTodoData();
  }, []);

  const sorted = [...todos].sort((a, b) => a.date - b.date);
  const limitSorted = sorted.slice(0, 3);
  const number = limitSorted.length;

  function textDisplay(number) {
    if (number === 0) {
      return (
        <h3>
          You currently have no tasks,{" "}
          <Link to="/Create">Create tasks here!</Link>
        </h3>
      );
    } else if (number > 0) {
      return <StyledH3>Tasks to start:</StyledH3>;
    }
  }

  return (
    <div>
      {textDisplay(number)}
      {limitSorted.map((e) => (
        <StyledRootDiv key={e.id}>
          <Link style={linkStyle} to={"/Schedule"}>
            <StyledH2>{e.name}</StyledH2>
            <StyledH3>{e.date}</StyledH3>
            <StyledP>{e.note}</StyledP>
          </Link>
        </StyledRootDiv>
      ))}
    </div>
  );
}

export default Todos;
