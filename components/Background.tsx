import React from 'react';

const Background: React.FC = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-slate-950">
      {/* Base ambient gradient */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            'radial-gradient(ellipse 90% 55% at 50% -12%, rgba(56,189,248,0.16), transparent 68%)',
            'radial-gradient(ellipse 60% 45% at 8% 32%, rgba(99,102,241,0.10), transparent 70%)',
            'radial-gradient(ellipse 55% 45% at 92% 68%, rgba(20,184,166,0.08), transparent 72%)',
          ].join(','),
        }}
      />

      {/* Subtle enterprise grid, faded toward the edges */}
      <div
        className="ambient-grid absolute inset-0"
        style={{
          backgroundImage: [
            'linear-gradient(to right, rgba(148,163,184,0.055) 1px, transparent 1px)',
            'linear-gradient(to bottom, rgba(148,163,184,0.055) 1px, transparent 1px)',
          ].join(','),
          backgroundSize: '64px 64px',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 70% at 50% 35%, black 20%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 85% 70% at 50% 35%, black 20%, transparent 100%)',
        }}
      />

      {/* Slow drifting glows */}
      <div className="ambient-orb ambient-orb-a absolute -left-40 top-[-18%] h-[36rem] w-[36rem] rounded-full bg-sky-500/[0.07] blur-[110px]" />
      <div className="ambient-orb ambient-orb-b absolute -right-52 top-[28%] h-[40rem] w-[40rem] rounded-full bg-indigo-500/[0.06] blur-[130px]" />
      <div className="ambient-orb ambient-orb-c absolute bottom-[-22%] left-1/3 h-[34rem] w-[34rem] rounded-full bg-teal-400/[0.05] blur-[120px]" />

      {/* Vignette for depth */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(to bottom, transparent 0%, rgba(2,6,23,0.18) 55%, rgba(2,6,23,0.55) 100%)',
        }}
      />
    </div>
  );
};

export default Background;
