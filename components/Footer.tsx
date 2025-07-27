
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-20">
      <div className="container mx-auto max-w-5xl px-4 py-6 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} Supriyadi. All Rights Reserved.</p>
        <p className="text-sm mt-2">Dibuat dengan React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
