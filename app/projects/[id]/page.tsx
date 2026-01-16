import { fetchProjects } from '@/lib/api/projects.service';
import { fetchTasks } from '@/lib/api/tasks';
import { notFound } from 'next/navigation';
import ProjectClient from './ProjectClient';


interface Props {
  params: { id: string };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { id } = await params;

  const projects = await fetchProjects();
  const project = projects.find(p => p.id === id);

  // ❌ DO NOT crash the route
  if (!project) {
    return (
      <div className="rounded-lg border bg-white p-6">
        <h1 className="text-lg font-semibold">Project not available</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          This project exists in your session but isn’t persisted yet.
        </p>
      </div>
    );
  }

  const tasks = await fetchTasks();
  const projectTasks = tasks.filter(
    task => task.projectId === project.id
  );

  return (
    <ProjectClient
      project={project}
      initialTasks={projectTasks}
    />
  );
}