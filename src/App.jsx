// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CalculatorPage from './pages/CalculatorPage';
import ContactPage from './pages/ContactPage';
import './index.css'; // Hanya ini yang biasanya diimpor

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<h1 className="text-center text-4xl mt-10 text-darkGrey">404 - Halaman Tidak Ditemukan</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;