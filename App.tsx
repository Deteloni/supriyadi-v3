
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import KeyAchievements from './components/KeyAchievements';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import type { View } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('hero');

  const renderView = () => {
    switch (activeView) {
      case 'hero':
        return <Hero onNavClick={setActiveView} />;
      case 'achievements':
        return <KeyAchievements />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavClick={setActiveView} />;
    }
  };
  
  // useMemo to prevent re-rendering of the view unless activeView changes
  const currentView = useMemo(() => renderView(), [activeView]);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Header activeView={activeView} onNavClick={setActiveView} />
      <main className="container mx-auto max-w-5xl px-4 py-8 md:py-16 flex-grow">
        <div key={activeView} className="animate-fade-in">
          {currentView}
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Simple fade-in animation
const animationStyle = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}
`;

const StyleInjector: React.FC = () => <style>{animationStyle}</style>;


const SpaApp: React.FC = () => (
    <>
        <StyleInjector />
        <App />
    </>
);


export default SpaApp;
