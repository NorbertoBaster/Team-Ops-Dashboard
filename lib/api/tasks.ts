import { Task } from '@/lib/types';
import { tasks } from '@/lib/data/tasks';

export async function fetchTasks(): Promise<Task[]> {
  // Simulate network delay
  await new Promise((res) => setTimeout(res, 400));

  return tasks;
}
