'use client';

import { useState, useEffect } from 'react';
import { Project, Task } from '@/lib/types';
import ProjectCard from '@/components/projects/ProjectCard';
import CreateProjectModal from '@/components/projects/CreateProjectModal';

interface Props {
  initialProjects: Project[];
  initialTasks: Task[];
}

export default function CreateProjectWrapper({
  initialProjects,
  initialTasks, // ✅ FIXED
}: Props) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | undefined>(
    undefined
  );
const [, forceUpdate] = useState(0);

useEffect(() => {
  function onStorage() {
    forceUpdate(v => v + 1);
  }

  window.addEventListener('storage', onStorage);
  return () => window.removeEventListener('storage', onStorage);
}, []);

  function handleCreate(project: Project) {
    setProjects(prev => [project, ...prev]);
  }

  function handleUpdate(updated: Project) {
    setProjects(prev =>
      prev.map(p => (p.id === updated.id ? updated : p))
    );
  }

  function handleDelete(id: string) {
    const confirmed = window.confirm('Delete this project?');
    if (!confirmed) return;

    setProjects(prev => prev.filter(p => p.id !== id));
  }

  function handleEdit(project: Project) {
    setEditingProject(project);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setEditingProject(undefined);
  }
function getStoredTasks(projectId: string): Task[] {
  if (typeof window === 'undefined') return [];

  try {
    const raw = localStorage.getItem(`tasks:project:${projectId}`);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
  /** ✅ Phase 2.4 stats */
  function getProjectStats(projectId: string) {
  const tasks = getStoredTasks(projectId);

  const total = tasks.length;
  const completed = tasks.filter(
    t => t.status === 'done'
  ).length;

  const progress =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return { total, progress };
}


  return (
    <div className="space-y-4">
      {/* Action bar */}
      <div className="flex justify-end">
        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
        >
          + New Project
        </button>
      </div>

      {/* Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => {
          const { total, progress } = getProjectStats(project.id);

          return (
            <ProjectCard
              key={project.id}
              project={project}
              taskCount={total}
              progress={progress}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          );
        })}
      </div>

      <CreateProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        project={editingProject}
      />
    </div>
  );
}
