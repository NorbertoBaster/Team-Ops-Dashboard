import { Task } from '@/lib/types';

export function getStoredTasks(projectId: string): Task[] {
  if (typeof window === 'undefined') return [];

  try {
    const raw = localStorage.getItem(`tasks:project:${projectId}`);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}
