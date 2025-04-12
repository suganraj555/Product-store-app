// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="text-center">
      <div className="glass-container mb-5">
        <h1>🛍️ Welcome to the online shopping</h1>
      </div>
  
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
  
};

export default Home;
