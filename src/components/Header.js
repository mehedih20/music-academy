import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { navData } from "../data";

const Header = () => {
  return (
    <>
      <Navbar variant="dark" bg="dark" expand="lg" className="py-3 edu-nav">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="/logo.png"
              width="25"
              height="25"
              className="d-inline-block align-top"
            />
            {"  "}
            Music Academy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              {navData.map((nav) => {
                const { id, url, name } = nav;
                return (
                  <NavLink
                    activeClassName="selected"
                    className="nav-link"
                    to={url}
                    key={id}
                  >
                    {name}
                  </NavLink>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
