
import React from 'react';
import { EDUCATION } from '../constants';

const BookOpenIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-sky-400">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
);

const Education: React.FC = () => {
    return (
        <section>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Pendidikan</h2>
            <div className="max-w-3xl mx-auto space-y-8">
                {EDUCATION.map((item, index) => (
                    <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex items-start gap-6 transition-all duration-300 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/10">
                        <div className="bg-slate-800 p-3 rounded-full mt-1">
                            {BookOpenIcon}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">{item.institution}</h3>
                            <p className="text-md text-slate-300 font-medium">{item.degree}</p>
                            <p className="text-sm text-slate-500 mt-1">{item.period}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
