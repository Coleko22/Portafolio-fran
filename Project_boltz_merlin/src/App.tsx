import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideosDemos from './components/VideosDemos';
import Podcasts from './components/Podcasts';
import KYC from './components/KYC';
import Biometria from './components/Biometria';
import SolucionesMerlin from './components/SolucionesMerlin';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'videos':
        return <VideosDemos />;
      case 'podcasts':
        return <Podcasts />;
      case 'kyc':
        return <KYC />;
      case 'biometria':
        return <Biometria />;
      case 'soluciones':
        return <SolucionesMerlin />;
      default:
        return (
          <>
            <Hero />
            <div className="py-16">
              <VideosDemos />
              <Podcasts />
              <KYC />
              <Biometria />
              <SolucionesMerlin />
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;