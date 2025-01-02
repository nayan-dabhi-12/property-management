import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const HeroSection = () => {
  return (
    <div className="hero-section py-5">
      <Container className="py-3">
        <div className="text-center mb-4">
          <h1 className="mb-3">Find Your Dream Property</h1>
          <p className="hero-p">
            Explore the best properties to buy, sell, or rent with ease.
          </p>
        </div>

        <div className="search-box p-4 rounded shadow">
          <Form>
            <Row className="g-3">
              {/* Location */}
              <Col xs={12} md={6} lg={3}>
                <Form.Group controlId="location">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter city or area"
                  />
                </Form.Group>
              </Col>

              {/* Property Type */}
              <Col xs={12} md={6} lg={2}>
                <Form.Group controlId="propertyType">
                  <Form.Label>Property Type</Form.Label>
                  <Form.Select>
                    <option value="flat">Flat</option>
                    <option value="villa">Villa</option>
                    <option value="commercial">Commercial</option>
                    <option value="plot">Plot</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              {/* Buy or Sell */}
              <Col xs={12} md={6} lg={2}>
                <Form.Group controlId="transactionType">
                  <Form.Label>Buy/Sell</Form.Label>
                  <Form.Select>
                    <option value="buy">Buy</option>
                    <option value="sell">Sell</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              {/* Area Size */}
              <Col xs={12} md={6} lg={2}>
                <Form.Group controlId="areaSize">
                  <Form.Label>Area Size (sq.ft)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="e.g., 1000"
                  />
                </Form.Group>
              </Col>

              {/* Price Range */}
              <Col xs={12} md={6} lg={2}>
                <Form.Group controlId="priceRange">
                  <Form.Label>Price Range</Form.Label>
                  <Form.Select>
                    <option value="below-50-lakhs">Below ₹50 Lakhs</option>
                    <option value="50-1-crore">₹50 Lakhs - ₹1 Crore</option>
                    <option value="above-1-crore">Above ₹1 Crore</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              {/* Search Button */}
              <Col xs={12} md={6} lg={1} className="d-flex align-items-end">
                <Button variant="danger" className="w-100">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
