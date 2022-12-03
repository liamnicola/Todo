import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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
  return (
    <StyledForm>
      <label for="name">Name</label>
      <br />
      <input type="text" id="name" placeholder="Enter Topic" />
      <br />
      <label for="due">Due Date</label>
      <br />
      <input type="text" id="due" placeholder="Enter Due Date" />
      <br />
      <button type="submit">Submit</button>
    </StyledForm>
  );
}

export default CreateTodo;
