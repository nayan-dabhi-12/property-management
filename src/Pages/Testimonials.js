import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const testimonials = [
  {
    id: 1,
    name: "Kamlesh Dudhat",
    company: "KARV Realty",
    since: "2000",
    served: "8500+",
    propertiesForSale: "393",
    propertiesForRent: "209",
    image:
      "https://thumbs.dreamstime.com/b/young-indian-man-happy-outdoors-looking-camera-39595562.jpg", // Replace with actual agent photo
  },
  {
    id: 2,
    name: "Nirmal Patel",
    company: "Niraj Estate Consultancy",
    since: "2012",
    served: "3000+",
    propertiesForSale: "245",
    propertiesForRent: "68",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // Replace with actual agent photo
  },
  {
    id: 3,
    name: "Pintu Zalavadiya",
    company: "Tasco Realty",
    since: "2014",
    served: "2500+",
    propertiesForSale: "270",
    propertiesForRent: "26",
    image:
      "https://t4.ftcdn.net/jpg/06/40/07/03/360_F_640070383_9LJ3eTRSvOiwKyrmBYgcjhSlckDnNcxl.jpg", // Replace with actual agent photo
  },
  {
    id: 4,
    name: "Jignesh",
    company: "Urban Space",
    since: "2011",
    served: "2000+",
    propertiesForSale: "64",
    propertiesForRent: "58",
    rating: "4",
    image:
      "https://www.shutterstock.com/image-photo/portrait-serious-confident-businessman-entrepreneur-260nw-2022462281.jpg", // Replace with actual agent photo
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section py-5">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title">MB Preferred Agents in Ahmedabad</h2>
          <Button variant="link" className="see-all-button">
            See all →
          </Button>
        </div>
        <Row className="g-4">
          {testimonials.map((testimonial) => (
            <Col md={3} sm={6} xs={12} key={testimonial.id}>
              <Card className="testimonial-card shadow-sm">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="agent-photo rounded-circle me-3"
                    />
                    <div>
                      <h5 className="mb-0 custom-h5">{testimonial.name}</h5>
                      <small className="text-muted">MB Preferred</small>
                      <hr />
                    </div>
                  </div>
                  <h6 className="company-name">{testimonial.company}</h6>
                  <p className="mb-1">
                    <small>Operating Since: {testimonial.since}</small>
                  </p>
                  <p className="mb-1">
                    <small>Buyers Served: {testimonial.served}</small>
                  </p>
                  <hr />
                  <Row className="align-items-center">
                    <Col className="text-center">
                      <h6 className="mb-0">{testimonial.propertiesForSale}</h6>
                      <small>Properties for Sale</small>
                    </Col>
                    <Col xs="auto" className="d-flex justify-content-center">
                      <hr className="vertical-hr-line" />
                    </Col>
                    <Col className="text-center">
                      <h6 className="mb-0">{testimonial.propertiesForRent}</h6>
                      <small>Properties for Rent</small>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
