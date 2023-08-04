import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useAuth from "../services/firebase/useAuth";
import useTodo from "../services/firebase/useTodo";
import { deleteDoc, getFirestore, doc} from "firebase/firestore";


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
  margin-top: 0px;
  
`;




function FullTodos() {
  const db = getFirestore();
  const { getTodos } = useTodo();
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false)

  const getTodoData = async () => {
    const todoSnap = await getTodos();
    //const q = getDocs(query(ref, orderBy("date", "asc"), ));
    let todos = [];
    if (todoSnap.size > 0 ) {
      todoSnap.forEach((doc) => {
        todos.push({ ...doc.data(), id: doc.id, account: doc.data().account });
      }); 
      setTodos(todos);
    }
  };




  const deleteTodo = async (id) => {
    const todoDoc = doc(db, "todos", id);
    await deleteDoc(todoDoc);
    setTodos(todos);
    getTodoData();
  };


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
            }}
          >Cancel</button>
        </div>
      ) : (
        <p></p>
      )} 

      {todos.map((todo) => (
        <StyledRootDiv>
          <StyledH2 id={todo.name}>{todo.name}</StyledH2>
          <StyledH3 id={todo.date}>{todo.date}</StyledH3>
          <StyledP id={todo.note}>{todo.note}</StyledP>
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
