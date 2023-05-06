import React from 'react';
import styled from 'styled-components';
import SearchBar from '../SerchBar/SearchBar.jsx';
import Logo from '../Logo.jsx';
import { NavLink } from 'react-router-dom';

const DivNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
   
`
export const StyledLink = styled(NavLink)`
  color: white;
  font-size: 2vw;
  padding: 2vw;
  
  text-decoration: none;

  &.${props => props.activeclassname} {
    border-top: .2vw solid #1B9880;
    color: #1B9880;
    font-size:2.3vw; 
    font-weight: 500; 
    padding-top: 1VW;
    transition: .8s;
  }
`;

export const StyledLogOut = styled(NavLink)`
  color: red;
  font-size: 2vw;
  padding: 2vw;
  
  text-decoration: none;
  `




export default function Nav(props) {
    return (
        <DivNav>
            <Logo />
            <ul>
                <div>
                    <StyledLink to='/home' activeclassname="active">
                        Home
                    </StyledLink>
                    <StyledLink activeclassname="active" to="/abaut">
                        Abaut
                    </StyledLink>
                    <StyledLogOut activeclassname="active" to="/">
                        LogOut
                    </StyledLogOut>
                </div>
            </ul>
            <SearchBar
                onSearch={props.onSearch}
            />
        </DivNav>
    )
};