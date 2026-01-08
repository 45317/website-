
import React from 'react';
import { Service, Project } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web',
    title: 'Custom Web Apps',
    description: 'Scalable, high-performance web applications built with React, Next.js, and TypeScript.',
    icon: '🌐'
  },
  {
    id: 'ai',
    title: 'AI Integration',
    description: 'Leveraging Gemini and LLMs to automate workflows and enhance user experiences.',
    icon: '🤖'
  },
  {
    id: 'mobile',
    title: 'Mobile Solutions',
    description: 'Cross-platform mobile applications that provide native-level performance and feel.',
    icon: '📱'
  },
  {
    id: 'cloud',
    title: 'Cloud Architecture',
    description: 'Robust AWS/GCP infrastructure design ensuring 99.9% uptime and global scalability.',
    icon: '☁️'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Ethereal NFT Marketplace',
    category: 'Web3 & Blockchain',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    description: 'A high-frequency trading platform for digital assets with real-time analytics.'
  },
  {
    id: '2',
    title: 'Lumina Health AI',
    category: 'Healthcare Tech',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    description: 'Diagnostic assistant tool using computer vision to analyze medical imagery.'
  },
  {
    id: '3',
    title: 'Stellar Logistics',
    category: 'Supply Chain',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    description: 'AI-driven route optimization system reducing fuel consumption by 24%.'
  },
  {
    id: '4',
    title: 'Nexus OS',
    category: 'Internal Tooling',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    description: 'A proprietary project management suite for distributed engineering teams.'
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CTO, TechFlow',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    quote: "Nexus Systems didn't just build our app; they helped define our digital future. Their AI integration shaved months off our processing time."
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Founder, Stratos Labs',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    quote: "The level of engineering precision is something I've rarely seen in agencies. They act like a true partner, not a vendor."
  },
  {
    id: '3',
    name: 'Amara Okafor',
    role: 'Head of Product, Lumina',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    quote: "Our engagement with Nexus resulted in a 40% increase in user retention. Their design intuition is world-class."
  }
];

export const TEAM = [
  { name: 'Elena Vance', role: 'Founder & CEO', image: 'https://i.pravatar.cc/150?u=elena' },
  { name: 'Marcus Thorne', role: 'CTO', image: 'https://i.pravatar.cc/150?u=marcus' },
  { name: 'Sarah Chen', role: 'Head of Design', image: 'https://i.pravatar.cc/150?u=sarah' }
];

export const AGENCY_PROMPT = `
You are Nexus Assistant, the AI ambassador for Nexus Systems, a top-tier development agency.
Our core values: Innovation, Performance, and Human-Centric Design.
Our Services: Web Development, AI Solutions, Mobile Apps, Cloud Architecture.
Your goal: Help potential clients understand our capabilities, answer questions about our tech stack (React, Node, Python, Gemini, AWS), and encourage them to book a consultation.
Be professional, tech-savvy, yet approachable. Keep answers concise.
`;
