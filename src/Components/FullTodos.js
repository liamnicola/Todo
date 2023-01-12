import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";
import useAuth from "../services/firebase/useAuth";
import { useHistory } from "react-router-dom";
import useTodo from "../services/firebase/useTodo";
import EditTodo from "./Edit";
import { collection, deleteDoc, getFirestore, doc, where, getDocs, query, orderBy, ref } from "firebase/firestore";
import { set } from "react-hook-form";
import TestEdit from "./TestCreate";

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
  border-color: white;
  font-size: 18pt;
`;

const StyledButton = styled.button`
  font-size: 15px;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 5px;
  border-radius: 12px;
  cursor: pointer;
  height: 30px;
  border-width: 1px;  
`;

  /*
  background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
  border-radius: 22px;
  color: white;
  margin-top: 6%;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  */

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
  const { user } = useAuth();
  const currentUser = user ? user.email : null;
  const db = getFirestore();
  const { getTodos } = useTodo();
  const history = useHistory();
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([]);
  const [editArea, setEditArea] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [tempId, setTempId] = useState("")


  const todoCollectionRef = collection(db, "todos");
 
  const getTodoData = async () => {
    const todoSnap = await getTodos();
    //const q = getDocs(query(ref, orderBy("date", "asc"), ));
    let todos = [];
    if (todoSnap.size > 0 ) {
      todoSnap.forEach((doc) => {
        todos.push({ ...doc.data(), id: doc.id });
      }); 
      setTodos(todos);
    }
  };
  
 
  /*const todoCollectionRef = collection(db, "todos");
  const getTodoData = async () => {
    await currentUser
    console.log(currentUser)
    const q = getDocs(query(todoCollectionRef, where("account", "==", currentUser), ));
    const todoSnap = await getDocs(q);
    let todos = [];
    if (todoSnap.size > 0 ) {
      todoSnap.forEach((doc) => {
        todos.push({ ...doc.data(), id: doc.id });
      }); 
      setTodos(todos);
    }
  };*/

  const deleteTodo = async (id) => {
    const todoDoc = doc(db, "todos", id);
    await deleteDoc(todoDoc);
    setTodos(todos);
    getTodoData();
  };


  const handleEditButton =  (todo) => {
    setIsEdit(true);
    setTempId(todo.id)
    setTodos(todo.todo);
    getTodoData();
  }

  const handleSubmitChange = () => {
    /*updateDoc(ref(db, `/${tempId}`), {
      todo,
      id: tempId
    })*/
  }

  useEffect(() => {
    getTodoData();
  }, []);

  const handleCancel = () => {
    setIsEdit(false)
  }


  const amount = todos.length;
  let displayAmount = 0;
  if (amount > 0) {
    displayAmount = amount + " Tasks Left To Complete:";
  } else if (amount === 1) {
    displayAmount = amount + " Task Left To Complete:";
  } else {
    displayAmount = " No Tasks Left To Complete";
  }

  return (
    <div>
      <StyledH2>You have {displayAmount}</StyledH2>
      {isEdit ? (
        <div>
          <input type ="text" placeholder="Edit Name"/>
          <input type ="date" placeholder="Edit Date"/>
          <input type ="text" placeholder="Edit Note"/>
          <button onClick={handleSubmitChange}>Update</button>
          <button  onClick={() => {
              setIsEdit(false);
              setTodo("");
            }}
          >Cancel</button>
        </div>
      ) : (
        <p></p>
      )} 
      {todos.map((todo) => (
        <StyledRootDiv>
          <StyledH2>{todo.name}</StyledH2>
          <StyledH3>{todo.date}</StyledH3>
          <StyledP>{todo.note}</StyledP>
          <StyledButtonDiv>
          <StyledButton
            onClick={() => {
              deleteTodo(todo.id);
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
