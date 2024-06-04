import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Product from './pages/Product';
import Beranda from './pages/Beranda';
import Hampers from './pages/Hampers';
import Header from './components/Header';
import Footer from './components/Footer';
import HalamanPembelian from './pages/HalamanPembelian';
import HalamanKeranjang from './pages/HalamanKeranjang';

function App() {
  return (
    <Router>
      <div className="content-wrapper">
        <Routes>
          <Route
            path="/Product"
            element={<Product />}
          />
          <Route
            path="/Beranda"
            element={<Beranda />}
          />
          <Route
            path="/Hampers"
            element={<Hampers />}
          />
          
          <Route
            path="/HalamanKeranjang"
            element={<HalamanKeranjang />}
          />

          
          <Route
            path="/HalamanPembelian"
            element={<HalamanPembelian />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
