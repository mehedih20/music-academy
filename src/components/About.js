import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import img from "../img/about.jpg";
const About = () => {
  return (
    <>
      <Title title="About" />
      <Container>
        <Row className="py-5">
          <Col lg={6}>
            <h2 className="fs-2 fw-light text-warning">About Us</h2>
            <p className="mb-3 text-secondary">
              Founded in 1945, Music Academy has remained one of the most
              distinguished institutes for Contemporary Music. The college
              offers you both graduate and undergraduate degrees. The college
              also provides 12-week online courses in music. In this institute,
              you can pursue a Bachelor of Music in Music composition, Jazz
              composition, Music therapy, Music Production and Engineering, etc.
              The faculties here are award-winners, experts, and very active in
              their field. Students get the very personalized attention of these
              faculties. The college has modern performance space, a high-tech
              recording studio, and other latest technology. Students here are
              from over 95 different countries.
            </p>
          </Col>
          <Col lg={6} className="d-flex alig-items-center">
            <img src={img} className="img-fluid" alt="about" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
