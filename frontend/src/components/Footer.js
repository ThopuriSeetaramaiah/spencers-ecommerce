import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Spencers</h5>
            <p className="text-muted">Your one-stop shop for everything you need.</p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Shop</h5>
            <ul className="list-unstyled">
              <li><Link to="/products?category=electronics" className="text-muted">Electronics</Link></li>
              <li><Link to="/products?category=clothing" className="text-muted">Clothing</Link></li>
              <li><Link to="/products?category=home" className="text-muted">Home & Kitchen</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li><Link to="/contact" className="text-muted">Contact Us</Link></li>
              <li><Link to="/about" className="text-muted">About Us</Link></li>
              <li><Link to="/help" className="text-muted">Help Center</Link></li>
            </ul>
          </Col>
        </Row>
        <hr className="my-3 bg-secondary" />
        <Row>
          <Col className="text-center text-muted">
            <p>&copy; {new Date().getFullYear()} Spencers E-commerce. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
