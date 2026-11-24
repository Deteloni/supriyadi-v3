import React from 'react';

export type View = 'hero' | 'achievements' | 'skills' | 'experience' | 'projects' | 'education' | 'contact';

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string;
  imageUrl: string;
  category: string;
  domain?: string;
  url?: string;
  highlights?: string[];
}

export interface Achievement {
  text: string;
  metric?: string;
  label?: string;
  detail?: string;
}

export interface WorkExperience {
  company: string;
  period: string;
  role: string;
  description: string;
  highlights?: string[];
  current?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  detail?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  duration: string;
  file: string;
  verifyUrl: string;
  category: string;
}
