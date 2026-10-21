import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NetworkTree from './components/NetworkTree';
import Tiers from './components/Tiers';
import Calculator from './components/Calculator';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Tiers />
        <NetworkTree />
        <Calculator />
      </main>
      <footer className="footer">
        <div className="container footer-content">
          <p>&copy; 2026 Nexus MLM. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
