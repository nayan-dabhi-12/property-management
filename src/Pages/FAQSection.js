// FAQSection.jsx
import React from "react";
import { Accordion, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FAQSection = () => {
  return (
    <div className="faq-section-bg">
      <Container className="faq-section py-5">
        <h3 className="text-center mb-4">Frequently Asked Questions</h3>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header >How do I list my property?</Accordion.Header>
            <Accordion.Body>
              To list your property, visit our website and click on the "List
              Property" section. Follow the simple steps to upload the details
              and photos of your property.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What are the charges for premium listing?
            </Accordion.Header>
            <Accordion.Body>
              The charges for premium listings depend on the type and location
              of the property. You can check our pricing section for more
              details.
            </Accordion.Body>
          </Accordion.Item>
          {/* Add more FAQ items as needed */}
        </Accordion>
      </Container>
    </div>
  );
};

export default FAQSection;
