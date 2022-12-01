//import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
    ul {  
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      font-size: 20pt;
      list-style: none;
      background-color: #282828;
      padding-top: 0;
      margin: 0;
      height: 50px;
      a:visited: color: #00FF00;
  `;


function Header(props){
    return(
        <div>
            <StyledNav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Schedule">Schedule</Link></li>
                    <li><Link to="/Create">Create Task</Link></li>
                    <li><Link to="/Profile">Profile</Link></li>
                    
                </ul>
            </StyledNav>
        </div>
    )
}

export default Header;