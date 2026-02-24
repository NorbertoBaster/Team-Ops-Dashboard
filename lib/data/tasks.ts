import { Task } from '@/lib/types';

export const tasks: Task[] = [
  { id: '1', title: 'Design landing page', projectId: '1', status: 'todo', priority: 'medium', createdAt: '2026-01-01T10:00:00Z', assigneeId: 'u1' },
  { id: '2', title: 'Set up API endpoints', projectId: '2', status: 'in_progress', priority: 'high', createdAt: '2026-01-02T11:30:00Z', assigneeId: 'u2' },
  { id: '3', title: 'Write unit tests', projectId: '1', status: 'todo', priority: 'low', createdAt: '2026-01-03T09:15:00Z', assigneeId: 'u3' },
  { id: '4', title: 'Deploy to staging', projectId: '2', status: 'done', priority: 'medium', createdAt: '2026-01-04T14:45:00Z', assigneeId: 'u2' },
];

