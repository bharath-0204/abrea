import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Shop from './components/shop';
import Collection from './components/collection';
import Footer from './components/footer';
import Product1 from './components/product1';
import AddToCart from './components/AddToCart';
import { CartProvider } from './context/CartContext';

function AppContent({ footerHovered, setFooterHovered }) {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <AddToCart />
      <div className="MainContent">
        <Routes>
          <Route path="/" element={<Hero hideContent={footerHovered} />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product1" element={<Product1 />} />
        </Routes>
      </div>
      <Footer setHovered={setFooterHovered} />
    </div>
  );
}

function App() {
  const [footerHovered, setFooterHovered] = useState(false);

  return (
    <Router>
      <CartProvider>
        <AppContent
          footerHovered={footerHovered}
          setFooterHovered={setFooterHovered}
        />
      </CartProvider>
    </Router>
  );
}

export default App;
