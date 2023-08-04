//import PropTypes from "prop-types";
import React from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../services/firebase/useAuth";
import PropTypes from "prop-types";

const StyledNav = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    font-size: 14pt;
    text-align: center;
    list-style: none;
    padding-left: 0;
    margin: 0;
    height: 50px;
  }
  a:-webkit-any-link {
    text-decoration: none;
    color: white;
  }
`;

const StyledBurgerMenu = styled.div`
    width: 100px;
    padding-top: 0;
    margin: 0;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    hr {
      margin: 10px 0 0 10px;
      width: 25%;
      border: 1px solid
      left: 5px;
  `;

const StyledClosedText = styled.p`
    text-align: center;
    margin-bottom: 15%;
    font-size: 20px;
    cursor: pointer;
  `;

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  padding: 50px;
  cursor: pointer;
  align-content: center;
  justify-content: center;
  padding-bottom: 20px;
  background: ${({ theme, active }) =>
    active ? theme.colors.black["#00000"] : ""};
`;

const StyledMenuWrapper = styled.div`
    transition: all 0.6s ease;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    height: 100vh;
    width: 304px;
    background: #282828;;
    position: fixed;
    padding-top: 1%;
    border-style: solid;
    border-color:#8766A7;
    border-width: 4px;
    border-left: 0;
    border-bottom: 0;
    border-top: 0;
    top: 0;
    left: 0;
    background-color: #090909;
    z-index: 1;
  `;


  function Menu(props) {
    const { onClick } = props;
    const location = useLocation();
    const { user, signUserOut } = useAuth();
  
  
    return (
      
      <div>
        <StyledClosedText onClick={onClick}> X </StyledClosedText>
        <StyledNav>
          <ul>
            <StyledLi active={location.pathname ==="/Home"}>
              <Link to="/home">Home</Link>
            </StyledLi>
            <StyledLi active={location.pathname ==="/Schedule"}>
              <Link to="/Schedule">Schedule</Link>
            </StyledLi>
            <StyledLi>
              <Link to="/Create">Create Task</Link>
            </StyledLi>
            <StyledLi onClick={signUserOut}>
          {user.displayName || user.email} <span onClick={signUserOut}>(Logout)</span>
          </StyledLi>
          </ul>
        </StyledNav>
      </div>
    );
  }
  Menu.propTypes = {
    onClick: PropTypes.func.isRequired
  };

function Header(props) {
  const {onClick, open} = props;
  const handleClick = e => {
    e.preventDefault();
    onClick(e);
  };
  return (
    <div>
      <StyledMenuWrapper open={open}>
        <Menu onClick={handleClick} />
      </StyledMenuWrapper>
      <StyledBurgerMenu onClick={handleClick}>
          <hr />
          <hr />
          <hr />
      </StyledBurgerMenu>
    </div>
  );
}

export default Header;
