import React from "react";
import "../App.css";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Product() {
  return <div className="Product"></div>;
}
<div className="App">
  <Header />
  <main>
    <ProductList />
    <ProductCard />
  </main>
  <Footer />
</div>;
export default Product;
