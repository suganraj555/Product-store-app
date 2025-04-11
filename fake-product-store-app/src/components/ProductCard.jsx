// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm border-0 transition">
        <img
          src={product.image}
          className="card-img-top p-4"
          alt={product.title}
          style={{ height: '250px', objectFit: 'contain' }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text fw-semibold text-success">Only ${product.price}</p>
          <p className="card-text small">
            ⭐ Rated {product.rating?.rate} / 5 by {product.rating?.count} users
          </p>
          <Link to={`/product/${product.id}`} className="btn btn-outline-primary mt-auto">
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
