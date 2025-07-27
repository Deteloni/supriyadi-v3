
import React from 'react';
import { ABOUT_ME_TEXT } from '../constants';
import type { View } from '../types';

interface HeroProps {
  onNavClick: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavClick }) => {
  return (
    <section>
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Supriyadi
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-sky-400 mb-6">
            Engineer | Research | Network
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto md:mx-0">
            {ABOUT_ME_TEXT}
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <button
              onClick={() => onNavClick('contact')} 
              className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
            >
              Hubungi Saya
            </button>
            <button
              onClick={() => onNavClick('projects')} 
              className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
            >
              Lihat Proyek
            </button>
          </div>
        </div>
        <div className="flex-shrink-0">
            <img src="supri.png" alt="Supriyadi's profile" className="rounded-full w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover border-4 border-slate-700 shadow-lg"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
