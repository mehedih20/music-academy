import React from "react";
import { Container } from "react-bootstrap";
import { BsChevronCompactRight } from "react-icons/bs";

const Title = ({ title }) => {
  return (
    <div className="title-img">
      <Container>
        <h2 className="display-6 py-5 text-light">
          <span className="text-warning">/</span> {title}
        </h2>
        <p className="mt-3 text-secondary">
          Home <BsChevronCompactRight /> {title}
        </p>
      </Container>
    </div>
  );
};

export default Title;
