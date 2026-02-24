'use client';
import { useState } from 'react';
import { Task, TaskStatus, Project } from '@/lib/types';
import TasksTable from './TasksTable';
import CreateTaskModal from './CreateTaskModal';

interface TasksWrapperProps {
  initialTasks: Task[];
  projects: Project[];
}

const statusOrder: TaskStatus[] = ['todo', 'in_progress', 'done'];

export default function TasksWrapper({ initialTasks, projects }: TasksWrapperProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreate = (task: Task) => setTasks(prev => [task, ...prev]);

  const handleUpdateTitle = (taskId: string, title: string) =>
    setTasks(prev => prev.map(t => (t.id === taskId ? { ...t, title } : t)));

  const handleStatusToggle = (taskId: string) =>
    setTasks(prev =>
      prev.map(t => {
        if (t.id !== taskId) return t;
        const nextIndex = (statusOrder.indexOf(t.status) + 1) % statusOrder.length;
        return { ...t, status: statusOrder[nextIndex] };
      })
    );

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button
          onClick={() => setIsModalOpen(true)}
          disabled={!projects.length}
          className={`rounded-md px-4 py-2 text-sm text-white ${
            !projects.length ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          + New Task
        </button>
      </div>

      <CreateTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreate}
        projects={projects}
      />

      <TasksTable
        tasks={tasks}
        projects={projects}
        onStatusToggle={handleStatusToggle}
        onUpdateTitle={handleUpdateTitle}
      />
    </div>
  );
}