// teams.ts
import { Team } from '@/lib/types';

export const teams: Team[] = [
  {
    id: '1',
    name: 'Design Team',
    memberCount: 5,
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Development Team',
    memberCount: 8,
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Marketing Team',
    memberCount: 4,
    createdAt: new Date().toISOString(),
  },
];
