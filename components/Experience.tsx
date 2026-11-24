import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Pengalaman Kerja</h2>
        <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
          Perjalanan dari riset kualitas hingga memimpin rekayasa sistem manufaktur.
        </p>
      </div>
      <div className="max-w-3xl mx-auto relative border-l-2 border-slate-700 pl-10 space-y-12">
        {EXPERIENCE.map((job, index) => (
          <div key={index} className="relative">
            <div className={`absolute w-4 h-4 rounded-full -left-[50px] top-1.5 border-4 border-slate-900 ${job.current ? 'bg-emerald-400' : 'bg-sky-500'}`}></div>
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <p className="text-sm font-medium text-sky-400">{job.period}</p>
              {job.current && (
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 rounded-full px-2 py-0.5">
                  Saat ini
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-white">{job.role}</h3>
            <p className="text-slate-400 font-semibold mb-3">{job.company}</p>
            <p className="text-slate-400 leading-relaxed">{job.description}</p>
            {job.highlights && (
              <ul className="mt-4 space-y-2">
                {job.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="text-sky-400 mt-1">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
