// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={product.image}
          className="p-4"
          alt={product.title}
          style={{ height: '250px', objectFit: 'contain' }}
        />
        <div className="card-body d-flex flex-column">
          <h5>{product.title}</h5>
          <p className="fw-semibold text-success">Only ${product.price}</p>
          <p>
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
