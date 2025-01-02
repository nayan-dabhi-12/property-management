import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CTASection = () => {
  return (
    <div className="cta-section">
      <Container className="text-center text-white cta-section-container py-5">
        <Row>
          <Col>
            <h2>Looking for Your Dream Home? Contact Us Now!</h2>
            <div className="cta-buttons mt-4 d-flex flex-wrap justify-content-center">
              <Button size="lg" className="cta-btn mx-2 mb-2">Contact Us</Button>
              <Button size="lg" className="cta-btn mx-2 mb-2">Get Started</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CTASection;
