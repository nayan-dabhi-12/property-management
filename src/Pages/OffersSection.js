import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const OffersSection = () => {
  const offers = [
    {
      id: 1,
      title: "Premium Listing Discount",
      description: "Get 20% off on premium property listings. Showcase your property to a larger audience.",
      icon: "https://cdn-icons-png.flaticon.com/512/2983/2983825.png",
    },
    {
      id: 2,
      title: "Zero Commission Deals",
      description: "Post your property now and enjoy zero commission on your first deal.",
      icon: "https://cdn-icons-png.flaticon.com/512/3163/3163098.png",
    },
    {
      id: 3,
      title: "Exclusive Offers for Members",
      description: "Become a member today and unlock exclusive discounts and features.",
      icon: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    },
  ];

  return (
    <div className="offers-section py-5">
      <Container>
        <h3 className="text-center mb-4">Limited-Time Offers</h3>
        <p className="text-center text-muted mb-5">
          Take advantage of these amazing deals to make your property stand out!
        </p>
        <Row className="g-4">
          {offers.map((offer) => (
            <Col key={offer.id} md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <img
                    src={offer.icon}
                    alt={offer.title}
                  />
                  <Card.Title>{offer.title}</Card.Title>
                  <Card.Text className="text-muted  custom-card-text">{offer.description}</Card.Text>
                  <Button variant="danger">Claim Offer</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OffersSection;
