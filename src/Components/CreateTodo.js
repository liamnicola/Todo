import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAuth from "../services/firebase/useAuth";
import {
  doc,
  addDoc,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";

/*rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  );*/

const StyledForm = styled.form`
  background: #232222;
  display: grid;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 50%;
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  margin: 0.9vw 0;
  border: 0;
  font-size: 20px;
  margin-left: 25%;
  border-radius: 25px;
`;
const StyledLabel = styled.label`
  text-align: center;
  margin-bottom: 10px;
  
`;

const StyledInput = styled.input`
  text-align: center;
  height: 25px;
  border-radius: 25px;

`;

const StyledButton = styled.button`
  height: 50px;
  background: linear-gradient(to right top, #BF81A0, #8766A7, #5694A0  );
  border-radius: 22px;
  color: white;
  cursor: pointer;
  margin-top: 6%;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

function TodoForm() {
  const db = getFirestore();

  const [newName, setNewName] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newNote, setNewNote] = useState("");
  const todoCollectionRef = collection(db, "todos");

  const formSchema = yup.object({
    name: yup.string().required("Name is Required"),
    date: yup.date().required("A date is required"),
    note: yup.string()
  }).required();
  

const {register, formState: { errors }, watch} = useForm({resolver: yupResolver(formSchema),defaultValues: {note: "", name: "", date: ""} ,});

  const maxCharacters = 5;
  const note = watch("note");
  const [remainingCount, setRemainingCount] = useState(maxCharacters);
  useEffect(() => {
    setRemainingCount(maxCharacters - note.length);
  }, [note]);

  const { user } = useAuth();
  

  const createTodo = async (event) => {
    let formData = {
      name: newName,
      date: newDate,
      note: newNote,
      account: user.email,
    }
    const Valid = await formSchema.isValid(formData)
    if(Valid ==true){
    addDoc(todoCollectionRef, {
      ...formData
    });
    console.log(Valid)
    event.preventDefault();
    document.createTodoForm.reset();
    alert("Created")
  } else {
    alert("All Data must be entered")
    event.preventDefault();
  }
  };

  return (
    <div>
      <StyledForm name="createTodoForm" onSubmit={createTodo}>
        <StyledLabel>Name </StyledLabel>
        <StyledInput
          type="name"
          name="name"
          placeholder="Please Enter a Name"
          {...register("name")}
          onChange={(event) => setNewName(event.target.value)}
        ></StyledInput>
        <label>{errors.name &&errors.name.message}</label>
        <br />
        <StyledLabel>Due Date </StyledLabel>
        <StyledInput
          type="date"
          name="date"
          min={new Date().toISOString().split('T')[0]}
          placeholder="Please Enter a Date"
          {...register("date")}
          onChange={(event) => setNewDate(event.target.value)}
        ></StyledInput>
        <label>{errors.date&&errors.date.message}</label>
        <br />
        <StyledLabel>Notes </StyledLabel>
        <StyledInput 
          type="note"
          name="note"
          placeholder="Note"
          maxLength={50}
          {...register("note")}
          onChange={(event) => setNewNote(event.target.value)}
        ></StyledInput>
        <label>{errors.note}</label>
        <br />
        <StyledButton type="submit" onSubmit={createTodo}>
          Submit
        </StyledButton>
      </StyledForm>
    </div>
  );
}

export default TodoForm;
