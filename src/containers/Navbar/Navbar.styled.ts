import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import { smallDevices } from '../../styles/Breakpoints';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc(100vw -1000px) / 2;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-item: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

const FaBarsSm = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }

`;
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  ${smallDevices(FaBarsSm)}
`;

const NavMenuSm = styled.div`
  display: none;
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  ${smallDevices(NavMenuSm)}
`;

const NavBtnSm = styled.div`
  display: none;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  ${smallDevices(NavBtnSm)}
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0, 2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0, 2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
