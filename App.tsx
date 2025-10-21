
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WhyAustralia from './components/WhyAustralia';
import WhyUK from './components/WhyUK';
import Destinations from './components/Destinations';
import Affiliates from './components/Affiliates';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-light font-sans">
      <Header />
      <main>
        <Hero />
        <Stats />
        <WhyAustralia />
        <WhyUK />
        <Destinations />
        <Affiliates />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default App;
