
import React from 'react';
import { CONTACT_INFO } from '../constants';

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);

const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const Contact: React.FC = () => {
  const contactLinks = [
      { 
          icon: <MailIcon className="h-6 w-6"/>, 
          text: CONTACT_INFO.email, 
          href: `mailto:${CONTACT_INFO.email}`
      },
      { 
          icon: <PhoneIcon className="h-6 w-6"/>, 
          text: CONTACT_INFO.phone, 
          href: `tel:${CONTACT_INFO.phone}`
      },
      { 
          icon: <LinkedinIcon className="h-6 w-6"/>, 
          text: "LinkedIn", 
          href: CONTACT_INFO.linkedin,
          target: "_blank"
      },
      { 
          icon: <GithubIcon className="h-6 w-6"/>, 
          text: "GitHub", 
          href: CONTACT_INFO.github,
          target: "_blank"
      },
  ];

  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Info Kontak</h2>
      <p className="text-slate-400 mb-8 max-w-lg mx-auto">
        Saya terbuka untuk diskusi, kolaborasi, atau peluang baru. Jangan ragu untuk menghubungi saya.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {contactLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.target || "_self"}
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium py-3 px-5 rounded-lg transition-all duration-300 "
          >
            {link.icon}
            <span>{link.text}</span>
          </a>
        ))}
      </div>
      <p className="mt-8 text-slate-500">📍 Lokasi: {CONTACT_INFO.location}</p>
    </section>
  );
};

export default Contact;
