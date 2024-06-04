// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
import '../App.css';

const products = [
  { id: 1, name: 'Nastar', price: 75000, weight: 250, image: './assets/nastar-katalog.png' },
  { id: 2, name: 'Kue Kacang', price: 60000, weight: 250, image: './assets/Kue-Kacang.png' },
  { id: 3, name: 'Kue Semprong', price: 25000, weight: 250, image: './assets/Kue-Semprong.png' },
  { id: 4, name: 'Kue Keju Strawberry', price: 70000, weight: 250, image: './assets/Kue-Keju-Strawberry.png' },
  { id: 5, name: 'Kastengel', price: 60000, weight: 250, image: './assets/Kastengel.png' },
  { id: 6, name: 'Putri Salju', price: 70000, weight: 250, image: './assets/Putri-Salju.png' },
];

const ProductList = () => {
  return (
    <section className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </section>
  );
};

export default ProductList;
