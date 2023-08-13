import React, { useState } from 'react';
import logo from '../assets/img/logo.svg';
import arrow from '../assets/img/arrow.svg';
import hamburger from '../assets/img/hamburger.svg';
import { styled, css } from 'styled-components';
import { Link } from "react-router-dom";

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    padding: 1rem 0;
    background-color: #fff;
    position: relative;
    border-bottom: 1px solid #ECECEC;
    @media (min-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
    @media (min-width: 1000px) {
        flex-direction: row;
    }
`;

const Menu = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    gap: 1rem;
    background-color: #fff;
    list-style: none;
    transition: all .3s ease-in;
    z-index: 999;
    li {
        margin: 0 .5rem;
    }
    @media (max-width: 767px) {
        width: 100%;
        ${({ isActive }) =>
            isActive &&
            css`
                transform: translateX(100%);
            `}
    }
    
    @media (min-width: 768px) {
        position: static;
        flex-direction: row;
        gap: 0;
    }
`;

const Button = styled.button`
    cursor: pointer;
    padding: 1rem;
    background-color: #4348DB;
    color: #fff;
    border-radius: 7px;
    border: none;
    img {
        margin-left: .7rem;
    }
`;

const NavbarLink = styled.a`
    color: #000;
    text-decoration: none;
`;

const Hamburger = styled.img`
    width: 48px;
    cursor: pointer;
    
    @media (min-width: 768px) {
        display: none;
    }
`;

export const Navbar = () => {
    const [isActive, setIsActive] = useState(true);

    const handleClick = () => {
      setIsActive(!isActive);
    console.log(isActive)

    };
  return (
    <Nav>
        <img as={Link} src={logo} to="/"  alt='Logo'/>
        <Menu isActive={isActive}>

            <li className='active'>
                <NavbarLink as={Link} activeStyle={{ color:'#5754a8' }} to='/'>
                    All Jobs
                </NavbarLink>
            </li>
            <li>
                <NavbarLink as={Link} to='/Internship'>
                    Internship
                </NavbarLink>
            </li>
            <li>
                <NavbarLink as={Link} to='/Fulltime'>
                    Fulltime
                </NavbarLink>
            </li>
            <li>
                <NavbarLink as={Link} to='/Engineering'>
                    Engineering                
                </NavbarLink>
            </li>
            <li>
                <NavbarLink as={Link} to='/Marketer'>
                    Marketer                
                </NavbarLink>
            </li>
            <li>
                <NavbarLink as={Link} to='/Designer'>
                    Designer                
                </NavbarLink>
            </li>
            <li>
                <NavbarLink as={Link} to='/Other'>
                    Other               
                </NavbarLink>
            </li>
            <Button as={Link} to="/Create">
                Submit 
                <img src={arrow} />
            </Button>
        </Menu>
        <Hamburger onClick={handleClick} src={hamburger} />

    </Nav>
  )
}
