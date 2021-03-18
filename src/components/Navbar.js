import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.jpg";
import Profil from "../assets/profile.png";
import Search from "./Search";

const Navigation = styled.div`
  width: 100%;
  height: 144px;
  z-index: 1000;
  position: absolute;
`;

const Container = styled.div`
  margin: 0 40px;
  height: 144px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    color: white;
  }
`;

const Logo = styled(Link)`
  width: 144px;
  height: 98px;
  img {
    width: 100%;
  }
`;
const User = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 7px;
  img {
    border-radius: 7px;
    width: 100%;
  }
`;

export default function Navbar() {
  return (
    <Navigation>
      <Container>
        <Logo to={"/"}>
          <img src={logo} alt="logo" />
        </Logo>
        <NavLinks>
          <Link to="/">Movies</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </NavLinks>
        <Search />
        <User>
          <img src={Profil} alt="Profile" />
        </User>
      </Container>
    </Navigation>
  );
}
