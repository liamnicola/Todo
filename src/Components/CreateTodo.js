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
import { create } from "yup/lib/Reference";

const StyledForm = styled.form`
  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  );
  display: block;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 50%;
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  margin: 0.9vw 0;
  border: 0;
  border-radius: 5px;
  font-size: 20px;
  margin-left: 25%;
`;
const StyledLabel = styled.label`
  text-align: left;
  margin-top: 5%;
`;
const StyledButton = styled.button`
  height: 44.63px;
  background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
  border-radius: 22px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 20%;
  margin-top: 6%;
`;

function TodoForm() {
  const db = getFirestore();

  const [newName, setNewName] = useState("");
  const [newDate, setNewDate] = useState("");
  const todoCollectionRef = collection(db, "todos");

  const { user } = useAuth();

  const createTodo = (event) => {
    addDoc(todoCollectionRef, {
      name: newName,
      date: newDate,
      account: user.email,
    });
    event.preventDefault();
    document.createTodoForm.reset();
    console.log(event);
  };

  return (
    <div>
      <StyledForm name="createTodoForm" onSubmit={createTodo}>
        <StyledLabel>Name </StyledLabel>
        <input
          type="name"
          name="name"
          placeholder="Please Enter a Name"
          onChange={(event) => setNewName(event.target.value)}
        ></input>
        <br />
        <StyledLabel>Due Date </StyledLabel>
        <input
          type="date"
          name="date"
          placeholder="Please Enter a Date"
          onChange={(event) => setNewDate(event.target.value)}
        ></input>
        <br />
        <StyledButton type="submit" onSubmit={createTodo}>
          Submit
        </StyledButton>
      </StyledForm>
    </div>
  );
}

/*const CreateTodo = (props) => {
  const { onSubmit, todo } = props;
  const [Todos, setTodos] = useState(0);
  const schema = yup.object({
    name: yup.string().required("you must enter a name"),
    date: yup.string().required("date is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ resolver: yupResolver(schema) });

  //const formValues = watch();
  let newTodo = {
    name: "",
    date: "",
  };
  //setTodos([newTodo]);

  const onFormSubmit = (data) => {
    onSubmit({ ...data, ...todo });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <label>Name </label> <br />
        <input {...register("name", { required: true })} />
        <p>{errors.name?.type === "required" && "Todo name Required"}</p>
        <label>Due Date </label> <br />
        <input type="date" {...register("date", { required: true })} />
        <p>{errors.date?.type === "required" && "Date is Required"}</p>
        <input type="submit" />
      </form>
    </div>
  );
}; */

export default TodoForm;
