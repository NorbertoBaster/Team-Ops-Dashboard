import { Team } from '@/lib/types';

export const teams: Team[] = [
  {
    id: '1',
    name: 'Frontend',
    memberCount: 3,
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Backend',
    memberCount: 2,
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Design',
    memberCount: 1,
    createdAt: new Date().toISOString(),
  },
];
