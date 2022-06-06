import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import classes from "../styles/Navigation.module.css";

const Navigation = (props) => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className={classes["navigation-navbar"]}
    >
      <Container>
        <Navbar.Brand href="#home">Samba Chinta</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
          style={{ width: "100%" }}
        >
          <Nav className={classes.nav}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
