import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const FooterSection = () => {
  return (
    <footer className="custom-footer">
      <Container>
        <Row className="mb-4">
          {/* About Section */}
          <Col md={4}>
            <h5>About PropertyHub</h5>
            <p>
              As the largest platform connecting property buyers and sellers, we
              provide trusted solutions for your needs. <a href="#read-more" className="footer-link">Read more...</a>
            </p>
          </Col>

          {/* Properties Section */}
          <Col md={4}>
            <h5>Properties in India</h5>
            <p>
              <a href="#new-delhi">Property in New Delhi</a> |{' '}
              <a href="#mumbai">Property in Mumbai</a> |{' '}
              <a href="#chennai">Property in Chennai</a> |{' '}
              <a href="#pune">Property in Pune</a>
            </p>
            <h5>New Projects in India</h5>
            <p>
              <a href="#delhi">New Projects in New Delhi</a> |{' '}
              <a href="#mumbai-projects">New Projects in Mumbai</a> |{' '}
              <a href="#chennai-projects">New Projects in Chennai</a>
            </p>
          </Col>

          {/* Social Media Section */}
          <Col md={4}>
            <h5>More from our Network</h5>
            <p>
              Times Now | ET Now
            </p>
            <div className="social-icons">
              <a href="#facebook" className="fab fa-facebook"></a>
              <a href="#twitter" className="fab fa-twitter"></a>
              <a href="#linkedin" className="fab fa-linkedin"></a>
              <a href="#youtube" className="fab fa-youtube"></a>
              <a href="#instagram" className="fab fa-instagram"></a>
            </div>
          </Col>
        </Row>

        {/* Bottom Links */}
        <Row className="footer-bottom">
          <Col md={12}>
            <div className="footer-links">
              <a href="#sitemap">Sitemap</a> | <a href="#terms">Terms & Conditions</a> |{' '}
              <a href="#privacy">Privacy Policy</a> |{' '}
              <a href="#careers">Careers</a> | <a href="#blog">Blog</a>
            </div>
            <p className="disclaimer">
              Disclaimer: PropertyHub is an intermediary offering its platform to
              advertise properties for sellers and customers. All offers and
              discounts on this platform are extended by third-party providers.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterSection;
