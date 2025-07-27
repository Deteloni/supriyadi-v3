
import React from 'react';

export type View = 'hero' | 'achievements' | 'skills' | 'experience' | 'projects' | 'education' | 'contact';

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string;
  imageUrl: string;
}

export interface Achievement {
  text: string;
}

export interface WorkExperience {
  company: string;
  period: string;
  role: string;
  description: string;
}

export interface EducationItem {
    institution: string;
    degree: string;
    period: string;
}
