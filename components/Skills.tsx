import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Keahlian Teknis</h2>
        <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
          Spesialisasi dari infrastruktur &amp; keamanan hingga integrasi enterprise dan rekayasa data.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 transition-all duration-300 hover:border-sky-500 hover:shadow-2xl hover:shadow-sky-500/10 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-3">
              {category.icon}
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>
            <p className="text-sm text-slate-500 mb-5">{category.description}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mt-auto">
              {category.skills.map((skill) => (
                <li key={skill.name} className="text-slate-400 flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-3 text-sky-400 flex-shrink-0"><path d="m9 11 4 4L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
