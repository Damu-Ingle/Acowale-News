import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NewsCards from './components/NewsCards';
import About from './components/About';
import NewsContent from './components/NewsContent'; 
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header title1='Home' title2='About' />
      <Routes>
        <Route path="/" element={<NewsCards />} />
        <Route path="/Home" element={<NewsCards />} />
        <Route path="/About" element={<About />} />
        <Route path="/NewsContent/:id" element={<NewsContent />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
