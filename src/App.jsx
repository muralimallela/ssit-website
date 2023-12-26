
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Header from './components/header';
import Clist from './components/clist'
import Footer from './components/Footer';
import Alumni from './components/alumni/Alumni';
import Faculty from './components/faculty/Faculty';
import './App.css';
const App = () => {
  return (
    <>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clist" element={<Clist />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/faculty" element={<Faculty />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
