import React from 'react';
import { Container, Row, Col, Carousel, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  // Mock featured products
  const featuredProducts = [
    {
      id: 1,
      name: 'Smartphone X',
      price: 699.99,
      imageUrl: 'https://via.placeholder.com/300',
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Designer T-Shirt',
      price: 49.99,
      imageUrl: 'https://via.placeholder.com/300',
      category: 'Clothing'
    },
    {
      id: 3,
      name: 'Coffee Maker',
      price: 129.99,
      imageUrl: 'https://via.placeholder.com/300',
      category: 'Home & Kitchen'
    }
  ];

  return (
    <Container>
      {/* Hero Carousel */}
      <Carousel className="mb-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400?text=Summer+Sale"
            alt="Summer Sale"
          />
          <Carousel.Caption>
            <h3>Summer Sale</h3>
            <p>Up to 50% off on selected items</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400?text=New+Arrivals"
            alt="New Arrivals"
          />
          <Carousel.Caption>
            <h3>New Arrivals</h3>
            <p>Check out our latest products</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Categories */}
      <h2 className="mb-4">Shop by Category</h2>
      <Row className="mb-5">
        <Col md={4} className="mb-3 mb-md-0">
          <Card className="h-100">
            <Card.Img variant="top" src="https://via.placeholder.com/300?text=Electronics" />
            <Card.Body className="text-center">
              <Card.Title>Electronics</Card.Title>
              <Button as={Link} to="/products?category=electronics" variant="outline-primary">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3 mb-md-0">
          <Card className="h-100">
            <Card.Img variant="top" src="https://via.placeholder.com/300?text=Clothing" />
            <Card.Body className="text-center">
              <Card.Title>Clothing</Card.Title>
              <Button as={Link} to="/products?category=clothing" variant="outline-primary">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Img variant="top" src="https://via.placeholder.com/300?text=Home+%26+Kitchen" />
            <Card.Body className="text-center">
              <Card.Title>Home & Kitchen</Card.Title>
              <Button as={Link} to="/products?category=home" variant="outline-primary">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Featured Products */}
      <h2 className="mb-4">Featured Products</h2>
      <Row>
        {featuredProducts.map(product => (
          <Col key={product.id} md={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="text-muted">{product.category}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold">${product.price.toFixed(2)}</span>
                  <Button as={Link} to={`/products/${product.id}`} variant="primary">View Details</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
