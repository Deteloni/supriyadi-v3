
import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white text-center mb-12">Pengalaman Kerja</h2>
      <div className="max-w-3xl mx-auto relative border-l-2 border-slate-700 pl-10 space-y-12">
        {EXPERIENCE.map((job, index) => (
          <div key={index} className="relative">
            <div className="absolute w-4 h-4 bg-sky-500 rounded-full -left-[48px] top-1.5 border-4 border-slate-900"></div>
            <p className="text-sm font-medium text-sky-400 mb-1">{job.period}</p>
            <h3 className="text-xl font-bold text-white">{job.role}</h3>
            <p className="text-slate-400 font-semibold mb-3">{job.company}</p>
            <p className="text-slate-400 leading-relaxed">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
