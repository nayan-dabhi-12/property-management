// WhyChooseUs.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "bi bi-check-circle",
      title: "Verified Properties",
      description:
        "All our listings are verified for accuracy and reliability.",
    },
    {
      icon: "bi bi-wallet2",
      title: "Affordable Pricing",
      description: "Get the best deals on properties within your budget.",
    },
    {
      icon: "bi bi-people",
      title: "Trusted by Thousands",
      description: "Over 10,000 happy customers trust our services.",
    },
    {
      icon: "bi bi-clock-history",
      title: "24/7 Support",
      description: "We are always here to help you find your dream property.",
    },
  ];

  return (
    <div className="why-choose">
      <Container className="py-5">
        <h2 className="text-center mb-4">Why Choose Us</h2>
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col key={index} xs={12} md={6} lg={3}>
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body>
                  <div className="mb-3 text-primary">
                    <i className={`${feature.icon} fs-1`}></i>
                  </div>
                  <Card.Title className="card-title">{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
