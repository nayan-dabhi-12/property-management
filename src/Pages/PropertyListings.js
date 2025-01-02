import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const properties = [
  {
    id: 1,
    name: "Luxury 3 BHK Apartment",
    location: "Ahmedabad, Gujarat",
    price: "₹ 1.5 Crore",
    badge: "Featured",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzGvZlBb8xH4tepOwR_XU9gvrWy6QQWHgAg&s", // Placeholder Image
  },
  {
    id: 2,
    name: "Spacious Villa",
    location: "Mumbai, Maharashtra",
    price: "₹ 3 Crore",
    badge: "For Sale",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/166987636.jpg?k=6bcd5e1c1fb7cf2c86a1f6dfd7853ac6e4136d0afd4c724e5bde2b0299d2a415&o=&hp=1",
  },
  {
    id: 3,
    name: "Commercial Office Space",
    location: "Delhi",
    price: "₹ 50 Lakh",
    badge: "For Rent",
    image: "https://f.hubspotusercontent30.net/hubfs/4689489/Commercial%20Office%20Spaces.jpg",
  },
];

const PropertyListings = () => {
  return (
    <div className="property-listings py-5">
      <Container>
        <h2 className="text-center mb-4">Explore Properties</h2>
        <Row className="g-4">
          {properties.map((property) => (
            <Col md={4} key={property.id}>
              <Card className="property-card shadow-sm">
                <Card.Img
                  variant="top"
                  src={property.image}
                  alt={property.name}
                  className="rounded"
                />
                <Card.Body>
                  <Badge className="mb-2 custom-badge">
                    {property.badge}
                  </Badge>
                  <Card.Title>{property.name}</Card.Title>
                  <Card.Text>
                    <small className="custom-small">{property.location}</small>
                    <br />
                    <strong className="custom-small">{property.price}</strong>
                  </Card.Text>
                  <Button variant="danger">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PropertyListings;
