'use client';

import { useEffect, useState } from 'react';
import { Task, Project } from '@/lib/types';
import TasksTable from '@/components/tasks/TasksTable';
import CreateTaskModal from '@/components/tasks/CreateTaskModal';

interface Props {
  project: Project;
  initialTasks: Task[];
  onStatsChange: (count: number, progress: number) => void;
}

const storageKey = (projectId: string) =>
  `tasks:project:${projectId}`;

export default function ProjectTasks({
  project,
  initialTasks,
  onStatsChange,
}: Props) {
  /* ✅ LAZY INIT (SSR SAFE) */
  const [tasks, setTasks] = useState<Task[]>(() => {
    if (typeof window === 'undefined') return initialTasks;

    const stored = localStorage.getItem(storageKey(project.id));
    if (!stored) return initialTasks;

    try {
      return JSON.parse(stored);
    } catch {
      return initialTasks;
    }
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  /* ✅ Persist tasks */
  useEffect(() => {
    localStorage.setItem(
      storageKey(project.id),
      JSON.stringify(tasks)
    );
  }, [tasks, project.id]);

  function handleCreate(task: Task) {
    setTasks(prev => [task, ...prev]);
    setIsModalOpen(false);
  }
function handleUpdateTitle(taskId: string, title: string) {
  setTasks(prev =>
    prev.map(t =>
      t.id === taskId ? { ...t, title } : t
    )
  );
}
  function handleStatusToggle(taskId: string) {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId
          ? {
              ...task,
              status:
                task.status === 'todo'
                  ? 'in_progress'
                  : task.status === 'in_progress'
                  ? 'done'
                  : 'todo',
            }
          : task
      )
    );
  }

  /* ✅ Lift stats up */
  useEffect(() => {
    const completed = tasks.filter(t => t.status === 'done').length;
    const total = tasks.length;
    const progress =
      total === 0 ? 0 : Math.round((completed / total) * 100);

    onStatsChange(total, progress);
  }, [tasks, onStatsChange]);
const [filter, setFilter] = useState<
  'all' | 'todo' | 'in_progress' | 'done'
>('all');
const visibleTasks =
  filter === 'all'
    ? tasks
    : tasks.filter(t => t.status === filter);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Tasks</h2>

        <button
          onClick={() => setIsModalOpen(true)}
          disabled={isModalOpen}
          className={`text-sm font-medium transition ${
            isModalOpen
              ? 'text-muted-foreground cursor-not-allowed'
              : 'text-blue-600 hover:underline'
          }`}
        >
          + Add task
        </button>
      </div>

      {/* ✅ EMPTY STATE */}
      {tasks.length === 0 && (
        <div className="rounded-md border border-dashed p-6 text-center text-sm text-muted-foreground">
          No tasks yet. Click <strong>+ Add task</strong> to get started.
        </div>
      )}
<div className="flex gap-2">
  {(['all', 'todo', 'in_progress', 'done'] as const).map(f => (
    <button
      key={f}
      onClick={() => setFilter(f)}
      className={`rounded-md px-3 py-1 text-sm ${
        filter === f
          ? 'bg-blue-600 text-white'
          : 'border bg-white'
      }`}
    >
      {f.replace('_', ' ')}
    </button>
  ))}
</div>

      {/* ✅ TABLE ONLY WHEN TASKS EXIST */}
      {tasks.length > 0 && (
        <TasksTable
          tasks={visibleTasks}
          onStatusToggle={handleStatusToggle}
          onUpdateTitle={handleUpdateTitle}
        />
      )}

      {/* Modal */}
      <CreateTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreate}
        defaultProjectId={project.id}
        projects={[project]}
      />
    </div>
  );
}
