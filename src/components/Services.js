import React from "react";
import Title from "./Title";
import { useDefaultContext } from "../context/Context";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router";

const Services = () => {
  const { services } = useDefaultContext();
  const history = useHistory();
  return (
    <>
      <Title title="Services" />
      <Container className="py-5 px-3">
        <div className="service-container">
          {services &&
            services.map((service) => {
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
      </Container>
    </>
  );
};

export default Services;
