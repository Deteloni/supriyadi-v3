
import React, { useState, useMemo } from 'react';
import Background from './components/Background';
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
    <div className="relative isolate flex min-h-screen flex-col overflow-hidden">
      <Background />
      <div className="relative z-10 flex flex-grow flex-col">
        <Header activeView={activeView} onNavClick={setActiveView} />
        <main className="container mx-auto max-w-5xl px-4 py-8 md:py-16 flex-grow">
          <div key={activeView} className="animate-section">
            {currentView}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

// Ambient background + section entrance animations
const animationStyle = `
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-section {
  animation: fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
}
@keyframes ambientA {
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(8%, 5%, 0) scale(1.12); }
}
@keyframes ambientB {
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(-6%, -7%, 0) scale(1.1); }
}
@keyframes ambientC {
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(4%, -5%, 0) scale(1.08); }
}
.ambient-orb-a { animation: ambientA 24s ease-in-out infinite; }
.ambient-orb-b { animation: ambientB 30s ease-in-out infinite; }
.ambient-orb-c { animation: ambientC 28s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) {
  .animate-section,
  .ambient-orb-a,
  .ambient-orb-b,
  .ambient-orb-c { animation: none !important; }
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
