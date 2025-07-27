
import React from 'react';
import { KEY_ACHIEVEMENTS } from '../constants';

const CheckCircleIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-emerald-400 flex-shrink-0">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

const KeyAchievements: React.FC = () => {
    return (
        <section>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Pencapaian Kunci</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {KEY_ACHIEVEMENTS.map((achievement, index) => (
                    <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex items-start gap-4 transition-all duration-300 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/10">
                        <div className="mt-1">
                            {CheckCircleIcon}
                        </div>
                        <p className="text-slate-300">{achievement.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default KeyAchievements;
