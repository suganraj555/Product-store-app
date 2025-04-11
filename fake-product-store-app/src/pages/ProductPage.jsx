// src/pages/ProductPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading product details...</p>;

  return (
    <div className="container">
      <Link to="/" className="btn btn-outline-secondary mb-4">← Back to shopping</Link>
  
      <div className="glass-container">
        <div className="row align-items-center">
          <div className="col-md-5 mb-4 mb-md-0 text-center">
            <img src={product.image} alt={product.title} className="img-fluid p-4 border rounded" style={{ maxHeight: '400px' }} />
          </div>
  
          <div className="col-md-7">
            <h2 className="mb-3">{product.title}</h2>
            <h4 className="text-success mb-3">💰 ${product.price}</h4>
            <p className="lead">{product.description}</p>
            <p className="text-muted">📦 Category: {product.category}</p>
            <p className="mt-3">
              ⭐ Rated {product.rating?.rate} / 5 ({product.rating?.count} reviews)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default ProductPage;
