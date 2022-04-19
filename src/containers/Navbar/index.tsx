import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from './Navbar.styled';

const Navbar: React.FC = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require('')} alt=""></img>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
