import React, { useRef, useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactSection = () => {
  const formRef = useRef(null);
  const [formHeight, setFormHeight] = useState(0);

  useEffect(() => {
    if (formRef.current) {
      setFormHeight(formRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="contact-section py-5">
      <Container>
        <h3 className="text-center mb-4">Get in Touch with Us</h3>
        <Row>
          {/* Left Column (Map) */}
          <Col md={6} sm={12} className="mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              title="Google Maps Location" // Add a descriptive title here
              width="100%"
              height={formHeight}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Col>

          {/* Right Column (Form) */}
          <Col md={6} sm={12}>
            <div
            className="right-col"
              ref={formRef}
            >
              <Form>
                {/* Name Input */}
                <Form.Group controlId="name">
                  <Form.Label className="right-form-lable">
                    Your Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="custom-control-placeholder"
                  />
                </Form.Group>

                {/* Email Input */}
                <Form.Group
                  className="mb-3"
                  controlId="exampleFormControlInput1"
                >
                  <Form.Label className="right-form-lable">
                    Email address
                  </Form.Label>
                  <Form.Control className="custom-control-placeholder" type="email" placeholder="name@example.com" />
                </Form.Group>

                {/* Phone Input */}
                <Form.Group controlId="phone">
                  <Form.Label className="right-form-lable">
                    Your Phone
                  </Form.Label>
                  <Form.Control
                  className="custom-control-placeholder"
                    type="text"
                    placeholder="Enter your phone number"
                    required
                  />
                </Form.Group>

                {/* Message Input */}
                <Form.Group controlId="message">
                  <Form.Label className="right-form-lable">
                    Your Message
                  </Form.Label>
                  <Form.Control
                  className="custom-control-placeholder"
                    as="textarea"
                    rows={3}
                    placeholder="Your message"
                    required
                  />
                </Form.Group>

                {/* Submit Button */}
                <Button type="submit" className="mt-3 w-100">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactSection;
