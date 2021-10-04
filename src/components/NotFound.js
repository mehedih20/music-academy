import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoReturnDownBackSharp } from "react-icons/io5";

const NotFound = () => {
  return (
    <Container>
      <div className="d-flex flex-column justify-content-center align-items-center py-5">
        <h1 className="display-1 text-warning">Error 404</h1>
        <p className="text-secondary display-6">Page not found!</p>

        <Link to="/" className="d-flex align-items-center btn btn-danger mt-3">
          <IoReturnDownBackSharp className="me-1" /> Home
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;
