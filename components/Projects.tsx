import React, { useMemo, useState } from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

const ExternalLinkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
  </svg>
);

const ProjectCard: React.FC<Project> = ({ title, description, techStack, imageUrl, category, domain, url, highlights }) => {
    return (
        <div className="bg-slate-800/50 rounded-xl border border-slate-700 flex flex-col h-full transform transition-all hover:-translate-y-2 duration-300 overflow-hidden shadow-lg hover:shadow-sky-500/10 hover:border-sky-500/60">
            <div className="relative h-48 bg-slate-900 overflow-hidden border-b border-slate-700">
                <img
                  src={imageUrl}
                  alt={`Preview ${title}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider bg-slate-900/80 text-sky-300 border border-sky-500/30 px-2 py-1 rounded">
                    {category}
                </span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                    {domain && (
                        <p className="text-xs text-slate-500 font-mono mb-3 break-all">{domain}</p>
                    )}
                    <p className="text-slate-400 mb-4 text-sm leading-relaxed">{description}</p>
                    {highlights && (
                        <ul className="space-y-1.5 mb-4">
                            {highlights.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                                    <span className="text-sky-400">•</span><span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="mt-auto pt-4 border-t border-slate-700/50 space-y-3">
                    <div>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Tech Stack</p>
                        <p className="text-sm text-sky-400 font-medium">{techStack}</p>
                    </div>
                    {url && (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-sky-400 transition-colors"
                        >
                            Live demo {ExternalLinkIcon}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('Semua');
  const categories = useMemo(
    () => ['Semua', ...Array.from(new Set(PROJECTS.map((project) => project.category)))],
    []
  );
  const visibleProjects = useMemo(
    () => filter === 'Semua' ? PROJECTS : PROJECTS.filter((project) => project.category === filter),
    [filter]
  );

  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">Portofolio Proyek</h2>
        <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
          Sistem enterprise, otomasi, dan integrasi yang dibangun untuk dunia produksi nyata.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`text-xs font-semibold px-4 py-2 rounded-full border transition-colors ${
              filter === category
                ? 'bg-sky-500 border-sky-500 text-white'
                : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-sky-500 hover:text-sky-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
