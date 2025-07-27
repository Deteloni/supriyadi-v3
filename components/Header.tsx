
import React from 'react';
import type { View } from '../types';

interface HeaderProps {
  activeView: View;
  onNavClick: (view: View) => void;
}

const Header: React.FC<HeaderProps> = ({ activeView, onNavClick }) => {
  const navLinks: { id: View; label: string }[] = [
    { id: 'achievements', label: 'Pencapaian' },
    { id: 'skills', label: 'Keahlian' },
    { id: 'experience', label: 'Pengalaman' },
    { id: 'projects', label: 'Proyek' },
    { id: 'education', label: 'Pendidikan' },
    { id: 'contact', label: 'Kontak' },
  ];

  return (
    <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-800">
      <nav className="container mx-auto max-w-5xl px-4">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => onNavClick('hero')} 
            className="text-xl font-bold text-white hover:text-sky-400 transition-colors"
          >
            Supriyadi
          </button>
          <ul className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => onNavClick(link.id)}
                  className={`font-medium text-sm transition-colors ${
                    activeView === link.id
                      ? 'text-sky-400'
                      : 'text-slate-300 hover:text-sky-400'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
