import React from "react";
import "../App.css";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Product() {
  return <div className="Product">
    <div className="App">
      <Header />
      <main>
        <ProductList />
      </main>
    </div>;
  </div>;
}
export default Product;
