import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { useDefaultContext } from "../context/Context";
import Title from "./Title";

const Service = () => {
  const { services } = useDefaultContext();
  const { name } = useParams();
  const history = useHistory();
  const title = `Services/${name}`;
  const singleService = services.find((item) => item.name === name);
  const { id, rating, price, img, details } = singleService;

  return (
    <>
      <Title title={title} />
      <Container>
        <Row className="py-5">
          <Col className="d-flex justify-content-end">
            <img src={img} alt={name} className="img-fluid" />
          </Col>
          <Col>
            <h4 className="fs-1 text-success fw-light">{name}</h4>
            <p className="lead">{details}</p>
            <p className="lead">
              Rating: <span className="text-primary">{rating}</span>
            </p>
            <p className="lead">
              Price: <span className="text-success">${price}</span>
            </p>
            <p className="lead">ID: {id}</p>
            <Button variant="danger" className="mb-3">
              Buy now!
            </Button>
            <br />
            <Button onClick={() => history.push("/services")} variant="primary">
              All Services
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Service;
