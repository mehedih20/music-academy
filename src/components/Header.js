import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const navData = [
  {
    id: 1,
    url: "/",
    name: "Home",
  },
  {
    id: 2,
    url: "/about",
    name: "About",
  },
  {
    id: 3,
    url: "/services",
    name: "Services",
  },
  {
    id: 4,
    url: "/contact",
    name: "Contact",
  },
];

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.png"
              width="25"
              height="25"
              className="d-inline-block align-top"
            />
            {"  "}
            Musical Edu
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {navData.map((nav) => {
                const { id, url, name } = nav;
                return (
                  <NavLink className="nav-link" to={url} key={id}>
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
