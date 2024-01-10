import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo.svg";
import arrow from "../assets/img/arrow.svg";
import hamburger from "../assets/img/hamburger.svg";
import { styled, css } from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  background-color: #fff;
  position: relative;
  border-bottom: 1px solid #ececec;
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
  transition: all 0.3s ease-in;
  z-index: 999;
  li {
    margin: 0 0.5rem;
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
  background-color: #4348db;
  color: #fff;
  border-radius: 7px;
  border: none;
  img {
    margin-left: 0.7rem;
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

  const location = useLocation();

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    setIsActive(false);
  }, [location]);

  return (
    <Nav>
      <img src={logo} alt="Logo" />
      <Menu isActive={isActive}>
        <li>
          <NavbarLink
            as={Link}
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            All Jobs
          </NavbarLink>
        </li>
        <li>
          <NavbarLink
            as={Link}
            to="/Internship"
            className={location.pathname === "/Internship" ? "active" : ""}
          >
            Internship
          </NavbarLink>
        </li>
        <li>
          <NavbarLink
            as={Link}
            to="/Fulltime"
            className={location.pathname === "/Fulltime" ? "active" : ""}
          >
            Fulltime
          </NavbarLink>
        </li>
        <li>
          <NavbarLink
            as={Link}
            to="/Engineering"
            className={location.pathname === "/Engineering" ? "active" : ""}
          >
            Engineering
          </NavbarLink>
        </li>
        <li>
          <NavbarLink
            as={Link}
            to="/Marketer"
            className={location.pathname === "/Marketer" ? "active" : ""}
          >
            Marketer
          </NavbarLink>
        </li>
        <li>
          <NavbarLink
            as={Link}
            to="/Designer"
            className={location.pathname === "/Designer" ? "active" : ""}
          >
            Designer
          </NavbarLink>
        </li>
        <li>
          <NavbarLink
            as={Link}
            to="/Other"
            className={location.pathname === "/Other" ? "active" : ""}
          >
            Other
          </NavbarLink>
        </li>
        <Button as={Link} to="/Create">
          Submit
          <img src={arrow} alt="Icon" />
        </Button>
      </Menu>
      <Hamburger onClick={handleClick} src={hamburger} />
    </Nav>
  );
};
