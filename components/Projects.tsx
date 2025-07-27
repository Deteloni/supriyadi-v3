
import React from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<Project> = ({ title, description, techStack, imageUrl }) => {
    return (
        <div className="bg-slate-800/50 rounded-xl border border-slate-700 flex flex-col h-full transform transition-all hover:-translate-y-2 duration-300 overflow-hidden shadow-lg hover:shadow-sky-500/10">
            <img src={imageUrl} alt={`Preview of ${title}`} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                    <p className="text-slate-400 mb-4 text-sm leading-relaxed">{description}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-slate-700/50">
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                       Tech Stack
                    </p>
                     <p className="text-sm text-sky-400 font-medium">{techStack}</p>
                </div>
            </div>
        </div>
    );
};


const Projects: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        Portofolio Proyek
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
