import React from "react";
import {
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Button,
} from "react-bootstrap";

import Title from "./Title";

import { contactData } from "../data";

const Contact = () => {
  return (
    <>
      <Title title="Contact" />
      <Container>
        <Row className="py-5 gy-3">
          {contactData.map((contact) => {
            const { id, icon, text } = contact;
            return (
              <Col
                lg={4}
                md={6}
                className="py-3 border-start border-end border-warning text-center"
                key={id}
              >
                <div>{icon}</div>
                <p className="fs-5 text-secondary">{text}</p>
              </Col>
            );
          })}
        </Row>
        <Form className="w-75 mx-auto">
          <h3 className="fs-3 fw-light mb-3 text-secondary">Contact Us</h3>
          <Row className="mb-3">
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
          <Form.Control
            className="mb-3"
            type="email"
            placeholder="Enter email"
          />
          <FloatingLabel
            className="mb-3"
            controlId="floatingTextarea2"
            label="Your text"
          >
            <Form.Control as="textarea" style={{ height: "100px" }} />
          </FloatingLabel>
          <Button variant="warning" className="mb-5 text-secondary">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Contact;
