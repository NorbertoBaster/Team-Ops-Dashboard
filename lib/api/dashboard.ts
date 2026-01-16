import { Project, Task, Activity } from '../types';

export interface DashboardData {
  totalProjects: number;
  totalTasks: number;
  completedTasks: number;
  recentActivity: Activity[];
  tasksOverTime: { date: string; count: number }[];
}

export async function fetchDashboardData(): Promise<DashboardData> {
  await new Promise(res => setTimeout(res, 800));

  return {
    totalProjects: 6,
    totalTasks: 42,
    completedTasks: 18,
    recentActivity: [
      {
        id: '1',
        type: 'task_created',
        message: 'Created task “Design landing page”',
        createdAt: new Date().toISOString(),
      },
    ],
    tasksOverTime: [
      { date: '2025-01-01', count: 5 },
      { date: '2025-01-02', count: 9 },
      { date: '2025-01-03', count: 14 },
    ],
  };
}
