import { Task } from '@/lib/types';

export type TaskStatus = 'todo' | 'in_progress' | 'completed';

export type TaskPriority = 'low' | 'medium' | 'high';

export const tasks: Task[] = [
  {
    id: '1',
    projectId: '1',
    title: 'Design dashboard layout',
    status: 'in_progress',
    priority: 'high',
    assigneeId: 'alex',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    projectId: '1',
    title: 'Implement projects CRUD',
    status: 'done',
    priority: 'medium',
    assigneeId: 'alex',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    projectId: '2',
    title: 'Set up task page shell',
    status: 'todo',
    priority: 'low',
    createdAt: new Date().toISOString(),
  },
];
