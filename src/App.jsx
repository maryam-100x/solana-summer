import React from 'react';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import CoinSection from './components/CoinSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <CoinSection />
      <EventDetails />
      <Footer />
    </div>
  );
}

export default App;
