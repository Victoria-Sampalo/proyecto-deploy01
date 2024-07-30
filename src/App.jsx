import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Footer from './components/Footer';
import Header from './components/Header'; // Importar Header
import './styles/global.css';
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />  {/* Renderizar Header */}
        <Home />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
