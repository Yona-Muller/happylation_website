// src/App.js
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SEO from './components/SEO';
import RegistrationForm from './components/RegistrationForm';
import AnimatedImagesSection from './components/AnimatedImagesSection';

import './App.css';

function App() {
  return (
    <div className="App">
      <SEO />
      <Header />
      <Main />
      <Footer />
      <AnimatedImagesSection />
      <RegistrationForm/>
    </div>
  );
}

export default App;
