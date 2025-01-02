import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
  };

  return (
    <div className="subscribe-section text-center py-5">
      <Container>
        <h3>Stay updated with the latest properties and offers.</h3>
        <Form onSubmit={handleSubmit} className="d-flex justify-content-center mt-4">
          <Form.Control 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className='custom-subscribe-input' 
          />
          <Button type="submit" className="ml-3">Subscribe</Button>
        </Form>
      </Container>
    </div>
  );
};

export default SubscribeSection;
