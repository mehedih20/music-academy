import React from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import { useHistory } from "react-router";
import welcomeImg from "../img/welcome.jpg";
import { useDefaultContext } from "../context/Context";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <Services />
      <Contact />
    </>
  );
};

//===== Hero Component ===========

const Hero = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/services");
  };

  return (
    <section className="hero py-5 d-flex align-items-center justify-content-center">
      <Container>
        <h1 className="display-4 mb-3 text-warning">
          Music that is for Everyone
        </h1>
        <h4 className="fs-3 fw-light text-light mb-5">
          Start learning right now!
        </h4>
        <Button onClick={handleClick} variant="warning">
          Explore Courses
        </Button>
      </Container>
    </section>
  );
};

//======= Welcome Component ===========

const Welcome = () => {
  return (
    <Container>
      <Row className="py-5 px-3">
        <Col lg={6} className="d-flex align-items-center mb-3">
          <img src={welcomeImg} className="img-fluid" alt="welcome" />
        </Col>
        <Col lg={6}>
          <h2 className="fs-2 fw-light" style={{ color: "#c98900" }}>
            Welcome
          </h2>
          <p className="mb-3 lead text-secondary">
            Music Academy offers comprehensive musicianship through active
            learning for children and adults. Our music educators are highly
            qualified and share a love of teaching. Our curriculum offers group
            experiences, private lessons, ensemble participation, theater, and
            camps. We believe that learning music can be fun, and we believe in
            the effectiveness of learning in groups.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

//======= Services Component ===========

const Services = () => {
  const { services } = useDefaultContext();
  const newServices = services.slice(0, 6);
  const history = useHistory();
  return (
    <div className="py-5 bg-light">
      <Container className="d-flex flex-column px-3">
        <h4 style={{ color: "#c98900" }} className="fs-2 fw-light mb-5">
          Services
        </h4>
        <div className="service-container">
          {newServices &&
            newServices.map((service) => {
              const { id, img, name, details, price, rating } = service;
              return (
                <div key={id} className="service-card">
                  <div className="service-card-top">
                    <div className="service-img">
                      <img src={img} alt={name} />
                    </div>
                  </div>
                  <div className="service-details mb-5">
                    <div className="bg-light p-3 d-flex justify-content-between align-items-center">
                      <h4 className="text-success mb-0">{name}</h4>
                      <p className="text-success mb-0">
                        ${price} <span className="text-muted">/month</span>
                      </p>
                    </div>
                    <p className=" text-secondary p-3 fs-6 fw-light">
                      {details}
                    </p>
                    <p className="text-secondary px-3 fs-6 fw-light">
                      Rating: <span className="text-danger">{rating}</span>
                    </p>
                  </div>
                  <button
                    onClick={() => history.push(`/services/course/${name}`)}
                    className=" d-block w-100 fs-5 border-0 py-2 "
                  >
                    Details
                  </button>
                </div>
              );
            })}
        </div>
        <Link
          className="btn btn-primary mt-5 d-inline-block mx-auto"
          to="/services"
        >
          Show more...
        </Link>
      </Container>
    </div>
  );
};

//======= Contact Component ===========

const Contact = () => {
  return (
    <>
      <Container className="py-5 px-3">
        <Form className="w-75 mx-auto">
          <h3 className="fs-3 fw-light" style={{ color: "#c98900" }}>
            Contact Us
          </h3>
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

export default Home;
