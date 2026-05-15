import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import LogoSection from './components/LogoSection';
import TheaterPlays from './components/TheaterPlays';
import Work from './components/Work';
import ProfilePreview from './components/ProfilePreview';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeScene, setActiveScene] = useState('Opening Frame');

  useEffect(() => {
    const scenes = [
      ['home', 'Opening Frame'],
      ['gallery', 'Portfolio'],
      ['story', 'My Story'],
      ['theater', 'Theater Plays'],
      ['work', 'Screening Room'],
      ['profile-preview', 'Actor Profile'],
      ['contact', 'Contact'],
    ];

    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollMax > 0 ? Math.min(scrollTop / scrollMax, 1) : 0);

      const current = scenes.reduce((latest, [id, label]) => {
        const node = document.getElementById(id);
        if (!node) return latest;
        const rect = node.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.42 ? label : latest;
      }, scenes[0][1]);

      setActiveScene(current);
    };

    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll);

    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, []);

  return (
    <div className="App" style={{ '--scroll-progress': scrollProgress }}>
      <div className="page-curtain" aria-hidden="true"></div>
      <aside className="scroll-director" aria-hidden="true">
        <span className="director-label">Scene</span>
        <div className="director-rail">
          <span className="director-progress"></span>
          <span className="director-reel"></span>
        </div>
        <span className="director-scene">{activeScene}</span>
      </aside>
      <Header />
      <Home />
      <LogoSection />
      <TheaterPlays />
      <Work />
      <ProfilePreview />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
