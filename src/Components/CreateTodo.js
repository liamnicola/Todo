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

const StyledForm = styled.form`
  display: block;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  margin: 0.9vw 0;
  border: 0;
  border-radius: 5px;
  font-size: 20px;
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
    console.log(event);
  };

  return (
    <div>
      <form onSubmit={createTodo}>
        <label>Name </label>
        <input
          type="name"
          name="name"
          placeholder="Please Enter a Name"
          onChange={(event) => setNewName(event.target.value)}
        ></input>
        <br />
        <label>Due Date </label>
        <input
          type="date"
          name="date"
          placeholder="Please Enter a Date"
          onChange={(event) => setNewDate(event.target.value)}
        ></input>
        <br />
        <button type="submit" onSubmit={createTodo}>
          Submit
        </button>
      </form>
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
