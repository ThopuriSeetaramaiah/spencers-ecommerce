import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Image, Card, Form } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  
  // Mock products data
  const mockProducts = [
    {
      id: "1",
      name: 'Smartphone X',
      price: 699.99,
      imageUrl: 'https://via.placeholder.com/500',
      category: 'Electronics',
      description: 'Latest smartphone with amazing features. High-resolution display, powerful processor, and all-day battery life. Take stunning photos with the dual-camera system.',
      inStock: true,
      features: [
        '6.5-inch Super Retina display',
        'A15 Bionic chip',
        'Dual-camera system',
        'Face ID',
        'All-day battery life'
      ]
    },
    {
      id: "2",
      name: 'Designer T-Shirt',
      price: 49.99,
      imageUrl: 'https://via.placeholder.com/500',
      category: 'Clothing',
      description: 'Comfortable cotton t-shirt with modern design. Made from 100% organic cotton for maximum comfort and durability.',
      inStock: true,
      features: [
        '100% organic cotton',
        'Machine washable',
        'Available in multiple colors',
        'Sizes S-XXL',
        'Modern fit'
      ]
    },
    {
      id: "3",
      name: 'Coffee Maker',
      price: 129.99,
      imageUrl: 'https://via.placeholder.com/500',
      category: 'Home',
      description: 'Automatic coffee maker for perfect brew every time. Programmable timer, adjustable brew strength, and thermal carafe to keep your coffee hot for hours.',
      inStock: true,
      features: [
        '12-cup capacity',
        'Programmable timer',
        'Adjustable brew strength',
        'Thermal carafe',
        'Auto shut-off'
      ]
    }
  ];
  
  useEffect(() => {
    // Simulate API call
    setLoading(true);
    
    setTimeout(() => {
      const foundProduct = mockProducts.find(p => p.id === id);
      
      if (foundProduct) {
        setProduct(foundProduct);
        setError(null);
      } else {
        setError('Product not found');
      }
      
      setLoading(false);
    }, 500);
  }, [id]);
  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };
  
  const handleAddToCart = () => {
    // In a real app, this would add the product to the cart
    alert(`Added ${quantity} ${product.name}(s) to cart`);
  };
  
  if (loading) {
    return <Container><p>Loading product details...</p></Container>;
  }
  
  if (error) {
    return (
      <Container>
        <p>Error: {error}</p>
        <Link to="/products">Back to Products</Link>
      </Container>
    );
  }
  
  if (!product) {
    return (
      <Container>
        <p>Product not found</p>
        <Link to="/products">Back to Products</Link>
      </Container>
    );
  }
  
  return (
    <Container>
      <Link to="/products" className="btn btn-outline-secondary mb-3">
        &larr; Back to Products
      </Link>
      
      <Row>
        <Col md={6} className="mb-4">
          <Image src={product.imageUrl} alt={product.name} fluid />
        </Col>
        
        <Col md={6}>
          <h1>{product.name}</h1>
          <p className="text-muted">{product.category}</p>
          <h3 className="mb-3">${product.price.toFixed(2)}</h3>
          
          <p>{product.description}</p>
          
          <Card className="mb-3">
            <Card.Header>Features</Card.Header>
            <Card.Body>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
          
          {product.inStock ? (
            <div className="d-flex align-items-center mb-3">
              <Form.Group className="me-3" style={{ width: '100px' }}>
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
              </Form.Group>
              <Button 
                variant="primary" 
                size="lg" 
                onClick={handleAddToCart}
                className="mt-3"
              >
                Add to Cart
              </Button>
            </div>
          ) : (
            <Button variant="secondary" size="lg" disabled>
              Out of Stock
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
