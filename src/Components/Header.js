//import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../services/firebase/useAuth";

const StyledNav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    font-size: 14pt;
    text-align: center;
    list-style: none;
    background-color: #282828;
    padding-top: 0;
    margin: 0;
    height: 50px;
    border-bottom: white solid 1px;
  }
  a:-webkit-any-link {
    text-decoration: none;
    color: white;
  }
`;

const StyledLi = styled.li`
  display: flex;
  align-items: right;
  padding: 10px;
  cursor: pointer;
  align-content: right;
`;

function Header(props) {
  const { user, signUserOut } = useAuth();
  return (
    <div>
      <StyledNav>
        <ul>
          <StyledLi>
            <Link to="/">Home</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/Schedule">Schedule</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/Create">Create Task</Link>
          </StyledLi>
          <StyledLi>
            <span onClick={signUserOut}>
              {user.displayName || user.email}(Logout)
            </span>
          </StyledLi>
        </ul>
      </StyledNav>
    </div>
  );
}

export default Header;
