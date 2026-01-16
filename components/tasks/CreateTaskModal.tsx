'use client';

import { useState } from 'react';
import { Task, TaskPriority, TaskStatus, Project } from '@/lib/types';

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (task: Task) => void;
  projects: Project[];
  defaultProjectId?: string;
}

export default function CreateTaskModal({
  isOpen,
  onClose,
  onCreate,
  projects,
  defaultProjectId,
}: CreateTaskModalProps) {
  const [title, setTitle] = useState('');
  const [projectId, setProjectId] = useState(
  defaultProjectId ?? ''
);
  const [status, setStatus] = useState<TaskStatus>('todo');
  const [priority, setPriority] = useState<TaskPriority>('medium');

  function handleClose() {
  setTitle('');
  setProjectId(defaultProjectId ?? '');
  setStatus('todo');
  setPriority('medium');
  onClose();
}
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!projectId) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      projectId,
      status,
      priority,
      createdAt: new Date().toISOString(),
    };

    onCreate(newTask);
handleClose();


    setTitle('');
    setProjectId(defaultProjectId ?? '');
    setStatus('todo');
    setPriority('medium');
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-lg font-semibold">Create Task</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>

          {!defaultProjectId && (
  <div>
    <label className="block text-sm font-medium">
      Project
    </label>
    <select
      value={projectId}
      onChange={(e) => setProjectId(e.target.value)}
      required
      className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
    >
      <option value="">Select project</option>
      {projects.map((project) => (
        <option key={project.id} value={project.id}>
          {project.name}
        </option>
      ))}
    </select>
  </div>
)}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as TaskStatus)}
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
              >
                <option value="todo">Todo</option>
                <option value="in_progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as TaskPriority)}
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button
               type="button"
  onClick={handleClose}
  className="rounded-md border px-4 py-2 text-sm"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
