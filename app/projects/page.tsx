import { fetchProjects } from '@/lib/api/projects.service';
import { fetchTasks } from '@/lib/api/tasks';
import CreateProjectWrapper from '@/components/projects/CreateProjectWrapper';

export default async function ProjectsPage() {
  const initialProjects = await fetchProjects();
  const allTasks = await fetchTasks();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Projects</h1>
      </div>

      <CreateProjectWrapper
        initialProjects={initialProjects}
        initialTasks={allTasks}
      />
    </div>
  );
}
