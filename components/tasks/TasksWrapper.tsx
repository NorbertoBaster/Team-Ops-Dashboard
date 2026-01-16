'use client';

import { useState } from 'react';
import { Task, TaskStatus, Project } from '@/lib/types';
import TasksTable from '@/components/tasks/TasksTable';
import CreateTaskModal from '@/components/tasks/CreateTaskModal';

interface Props {
  initialTasks: Task[];
  projects: Project[];
}

const statusOrder: TaskStatus[] = ['todo', 'in_progress', 'done'];

export default function TasksWrapper({ initialTasks, projects }: Props) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleCreate(task: Task) {
    setTasks((prev) => [task, ...prev]);
  }
function handleUpdateTitle(taskId: string, title: string) {
  setTasks(prev =>
    prev.map(task =>
      task.id === taskId
        ? { ...task, title }
        : task
    )
  );
}

  function handleStatusToggle(taskId: string) {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== taskId) return task;

        const currentIndex = statusOrder.indexOf(task.status);
        const nextStatus =
          statusOrder[(currentIndex + 1) % statusOrder.length];

        return { ...task, status: nextStatus };
      })
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
  <button
    onClick={() => setIsModalOpen(true)}
    disabled={projects.length === 0}
    className={`rounded-md px-4 py-2 text-sm font-medium text-white
      ${projects.length === 0
        ? 'bg-gray-300 cursor-not-allowed'
        : 'bg-blue-600 hover:bg-blue-700'}
    `}
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
