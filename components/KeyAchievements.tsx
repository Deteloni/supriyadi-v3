import React from 'react';
import { KEY_ACHIEVEMENTS, FOCUS_AREAS } from '../constants';

const CheckCircleIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-emerald-400 flex-shrink-0">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

const SparkIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-sky-300 flex-shrink-0">
        <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"></path>
    </svg>
);

const KeyAchievements: React.FC = () => {
    const highlights = KEY_ACHIEVEMENTS.filter((item) => item.metric);
    const details = KEY_ACHIEVEMENTS.filter((item) => !item.metric);

    return (
        <section>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white">Pencapaian Kunci</h2>
                <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
                    Dampak nyata dari sistem, otomasi, dan infrastruktur yang saya bangun di lingkungan manufaktur.
                </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {highlights.map((item, index) => (
                    <div key={index} className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/40 p-5 rounded-xl border border-slate-700 text-center transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-xl hover:shadow-sky-500/10">
                        <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-sky-500/10 blur-xl"></div>
                        <p className="text-3xl font-bold text-sky-400">{item.metric}</p>
                        <p className="text-sm font-semibold text-white mt-2">{item.label}</p>
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed">{item.detail}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
                {FOCUS_AREAS.map((area) => (
                    <span key={area} className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold px-4 py-2 rounded-full">
                        {SparkIcon} {area}
                    </span>
                ))}
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {details.map((item, index) => (
                    <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex items-start gap-4 transition-all duration-300 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/10">
                        <div className="mt-1">{CheckCircleIcon}</div>
                        <div>
                            <p className="text-slate-300 leading-relaxed">{item.text}</p>
                            {item.detail && (
                                <p className="text-xs text-sky-400/80 font-medium mt-3 tracking-wide">
                                    {item.detail}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default KeyAchievements;
