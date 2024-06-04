// src/components/ProductCard.js
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <p>Harga: Rp.{product.price.toLocaleString()}</p>
      <p>Berat: {product.weight} gram</p>
      <button>
        tambahkan ke keranjang{' '}
        <span>
          <i className="bi bi-cart"></i>
        </span>
      </button>
    </div>
  );
};

export default ProductCard;
