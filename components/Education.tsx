import React from 'react';
import { EDUCATION, CERTIFICATES } from '../constants';

const BookOpenIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-sky-400">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
);

const AwardIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-sky-400 flex-shrink-0">
        <circle cx="12" cy="8" r="6"></circle>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
    </svg>
);

const Education: React.FC = () => {
    return (
        <section>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Pendidikan</h2>
            <div className="max-w-3xl mx-auto space-y-6">
                {EDUCATION.map((item, index) => (
                    <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex items-start gap-6 transition-all duration-300 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/10">
                        <div className="bg-slate-800 p-3 rounded-full mt-1">{BookOpenIcon}</div>
                        <div className="flex-grow">
                            <div className="flex flex-wrap items-center gap-3">
                                <h3 className="text-xl font-bold text-white">{item.institution}</h3>
                                {item.gpa && (
                                    <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 rounded-full px-3 py-1">
                                        GPA {item.gpa}
                                    </span>
                                )}
                            </div>
                            <p className="text-md text-slate-300 font-medium">{item.degree}</p>
                            <p className="text-sm text-slate-500 mt-1">
                                {item.period}{item.detail ? ` · ${item.detail}` : ''}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="max-w-5xl mx-auto mt-16">
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white">Sertifikat</h3>
                    <p className="text-slate-400 mt-2 text-sm">
                        Kursus dan sertifikasi profesional yang telah diselesaikan.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {CERTIFICATES.map((cert) => (
                        <div key={cert.file} className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 flex flex-col transition-all duration-300 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/10">
                            <div className="flex items-start gap-3 mb-3">
                                {AwardIcon}
                                <div>
                                    <p className="text-sm font-semibold text-white leading-snug">{cert.title}</p>
                                    <p className="text-xs text-slate-500 mt-1">{cert.issuer}</p>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-auto pt-3">
                                {cert.date} · {cert.duration} · {cert.category}
                            </p>
                            <div className="flex flex-wrap gap-4 mt-3 pt-3 border-t border-slate-700/60">
                                <a href={cert.file} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-sky-400 hover:text-sky-300">
                                    Lihat Sertifikat ↗
                                </a>
                                <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-slate-400 hover:text-sky-300">
                                    Verifikasi ↗
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
