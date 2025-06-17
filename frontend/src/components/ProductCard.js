import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card className="product-card h-100">
      <Link to={`/products/${product.id}`}>
        <Card.Img 
          variant="top" 
          src={product.imageUrl} 
          alt={product.name}
          className="p-3"
        />
      </Link>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="text-muted mb-1">{product.category}</Card.Text>
        <Card.Text className="text-truncate mb-2">{product.description}</Card.Text>
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="fw-bold">${product.price.toFixed(2)}</span>
            {product.inStock ? (
              <span className="text-success">In Stock</span>
            ) : (
              <span className="text-danger">Out of Stock</span>
            )}
          </div>
          <Button 
            variant="primary" 
            className="w-100"
            disabled={!product.inStock}
          >
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
