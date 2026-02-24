import TasksWrapper from '@/components/tasks/TasksWrapper';
import { fetchTasks } from '@/lib/api/tasks';
import { fetchProjects } from '@/lib/api/projects.service';

export default async function TasksPage() {
  const [tasks, projects] = await Promise.all([fetchTasks(), fetchProjects()]);

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Tasks</h1>

      <TasksWrapper
        initialTasks={tasks ?? []}
        projects={projects ?? []}
      />
    </div>
  );
}