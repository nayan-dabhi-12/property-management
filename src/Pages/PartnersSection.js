import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"; // External CSS file for custom styles

const PartnersSection = () => {
  const partners = [
    {
      name: "Adani Group",
      logo: "https://i.pinimg.com/originals/20/3d/8e/203d8e6de718b5a5f34295533e6f808b.png",
      description: "A leading conglomerate in India specializing in real estate, infrastructure, and more.",
      website: "https://www.adani.com/",
    },
    {
      name: "Lodha Group",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-IAmgk26Zo2CqrkBnVGBARihz-n1ffMQWg&s",
      description: "One of India's top real estate developers, known for luxury and premium homes.",
      website: "https://www.lodhagroup.in/",
    },
    {
      name: "Oberoi Realty",
      logo: "https://storage.googleapis.com/realtyplusmag-news-photo/news-photo/112695.Oberoi-Realty.png",
      description: "Delivering innovation and excellence in residential and commercial real estate.",
      website: "https://www.godrejproperties.com/",
    },
  ];

  return (
    <div className="partners-section py-5">
      <Container>
        <h3 className="text-center mb-4">Our Trusted Partners</h3>
        <Row className="g-4">
          {partners.map((partner, index) => (
            <Col key={index} md={4} sm={6}>
              <Card className="partner-card h-100 text-center border-0 p-3">
                <Row className="align-items-center">
                  <Col xs={4}>
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="partner-logo"
                    />
                  </Col>
                  <Col xs={8} className="text-start">
                    <h5>{partner.name}</h5>
                    <p className="mb-2">{partner.description}</p>
                  </Col>
                </Row>
                <div className="hover-button mt-3">
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-100"
                  >
                    Visit Website
                  </a>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PartnersSection;
