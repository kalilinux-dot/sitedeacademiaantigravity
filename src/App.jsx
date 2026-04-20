import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
