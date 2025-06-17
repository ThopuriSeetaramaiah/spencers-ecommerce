import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const searchQuery = searchParams.get('search');
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Mock products data
  const mockProducts = [
    {
      id: 1,
      name: 'Smartphone X',
      price: 699.99,
      imageUrl: 'https://via.placeholder.com/300',
      category: 'Electronics',
      description: 'Latest smartphone with amazing features',
      inStock: true
    },
    {
      id: 2,
      name: 'Designer T-Shirt',
      price: 49.99,
      imageUrl: 'https://via.placeholder.com/300',
      category: 'Clothing',
      description: 'Comfortable cotton t-shirt with modern design',
      inStock: true
    },
    {
      id: 3,
      name: 'Coffee Maker',
      price: 129.99,
      imageUrl: 'https://via.placeholder.com/300',
      category: 'Home',
      description: 'Automatic coffee maker for perfect brew every time',
      inStock: true
    },
    {
      id: 4,
      name: 'Wireless Headphones',
      price: 159.99,
      imageUrl: 'https://via.placeholder.com/300',
      category: 'Electronics',
      description: 'Noise cancelling wireless headphones',
      inStock: false
    },
    {
      id: 5,
      name: 'Running Shoes',
      price: 89.99,
      imageUrl: 'https://via.placeholder.com/300',
      category: 'Clothing',
      description: 'Comfortable shoes for running and exercise',
      inStock: true
    },
    {
      id: 6,
      name: 'Blender',
      price: 79.99,
      imageUrl: 'https://via.placeholder.com/300',
      category: 'Home',
      description: 'High-speed blender for smoothies and more',
      inStock: true
    }
  ];
  
  useEffect(() => {
    // Simulate API call
    setLoading(true);
    
    setTimeout(() => {
      let filteredProducts = [...mockProducts];
      
      // Filter by category if provided
      if (categoryParam) {
        filteredProducts = filteredProducts.filter(
          product => product.category.toLowerCase() === categoryParam.toLowerCase()
        );
      }
      
      // Filter by search query if provided
      if (searchQuery) {
        filteredProducts = filteredProducts.filter(
          product => 
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      
      setProducts(filteredProducts);
      setLoading(false);
    }, 500);
  }, [categoryParam, searchQuery]);
  
  if (loading) {
    return <Container><p>Loading products...</p></Container>;
  }
  
  if (error) {
    return <Container><p>Error loading products: {error}</p></Container>;
  }
  
  return (
    <Container>
      <h1 className="mb-4">
        {categoryParam 
          ? `${categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)} Products` 
          : searchQuery 
            ? `Search Results for "${searchQuery}"` 
            : 'All Products'}
      </h1>
      
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <Row>
          {products.map(product => (
            <Col key={product.id} md={4} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ProductList;
