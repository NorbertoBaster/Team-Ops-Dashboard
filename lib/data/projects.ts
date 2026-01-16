import { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    id: '1',
    name: 'Team Ops Dashboard',
    description: 'Internal dashboard for managing projects and tasks',
    status: 'active',
    ownerId: '1',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Marketing Website',
    description: 'Landing page and CMS integration',
    status: 'paused',
    ownerId: '1',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Mobile Companion App',
    description: 'React Native companion app',
    status: 'completed',
    ownerId: '1',
    createdAt: new Date().toISOString(),
  },
];
