import React from "react";
import Link from "next/link";
import { Nav } from "react-bootstrap";

const Layouts = ({ children }) => {
  return (
    <>
      <nav
        className="navbar d-flex flex-row text-dark justify-content-around mb-4 "
        style={{ textAlign: "center", fontSize: "25px" }}
      >
        <Nav className="me-auto">
          <Nav.Link href="./landing">Home</Nav.Link>

          <Nav.Link href="./addRecipe">Add Recipe</Nav.Link>

          <Nav.Link href="./landingPage">Landing Page</Nav.Link>

          <Nav.Link href="./Profile">Profile</Nav.Link>
        </Nav>
      </nav>
      <div className="container bg-light text-dark">{children}</div>
    </>
  );
};

export default Layouts;
