
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,Routes, Link, Switch, Route } from "react-router-dom";



import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'


function App() {
  return (
    <div className="App container max-w-[1000px]">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      
    </div>
  );
}

export default App;
