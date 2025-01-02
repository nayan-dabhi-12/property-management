// BlogSection.js
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BlogSection = () => {
  const blogs = [
    {
      title: "5 Tips for Buying Your First Home",
      description:
        "Discover essential tips to make your first home-buying experience seamless and enjoyable.",
      image:
        "https://hoppercommunities.com/wp-content/uploads/2021/09/43047957_m.jpg",
      link: "#",
    },
    {
      title: "Top Locations for Real Estate Investment",
      description:
        "Explore the best locations to invest in real estate for maximum returns.",
      image:
        "https://assets.isu.pub/document-structure/221230090623-339e36204a57aee7f14fe639b415d068/v1/414e75f33995aa561771e8aa49921511.jpeg",
      link: "#",
    },
    {
      title: "How to Sell Your Property Faster",
      description:
        "Discover the key strategies to sell your property faster and secure the best price effortlessly.",
      image:
        "https://homebazaar-blog.s3.ap-south-1.amazonaws.com/knowledge/wp-content/uploads/2023/01/07062412/FeatureImage_10-tips-to-sell-your-home-faster-jpeg-1-750x375.webp",
      link: "#",
    },
  ];

  return (
    <div className="blog-section-bg">
      <Container className="py-5 blog-section">
        <h2 className="text-center mb-4 blog-h2">Our Blog</h2>
        <Row className="g-4">
          {blogs.map((blog, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={blog.image}
                  alt={blog.title}
                  className="rounded"
                />
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.description}</Card.Text>
                  <Button href={blog.link} className="mt-2 blog-btn">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BlogSection;
