import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NewsCards from './components/NewsCards';
import About from './components/About';
import NewsContent from './components/NewsContent'; 

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
    </Router>
  );
}

export default App;
