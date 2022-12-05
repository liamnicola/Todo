import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

function CreateTodo(props) {
  const { onSubmit } = props;
  const schema = yup.object().shape({
    name: yup.string().required("you must enter a name"),
    date: yup.string().required("date is required"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({ resolver: yupResolver(schema) });

  const formValues = watch();
  let todoData = {
    name: "",
    date: "",
  };

  useEffect(() => {
    todoData.name = formValues.name;
    todoData.date = formValues.date;
  });

  const onFormSubmit = (data) => {
    onSubmit({ ...data, ...todoData });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <input {...register("name", { required: true })} />
        <p>{errors.name?.type === "required" && "Todo name Required"}</p>
        <input {...register("date", { required: true })} />
        <p>{errors.date?.type === "required" && "Date is Required"}</p>
        <input type="submit" />
      </form>
    </div>
  );
}

export default CreateTodo;
