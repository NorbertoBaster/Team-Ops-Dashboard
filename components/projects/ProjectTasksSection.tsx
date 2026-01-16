'use client';

import { useState } from 'react';
import { Task, Project } from '@/lib/types';
import TasksTable from '@/components/tasks/TasksTable';
import CreateTaskModal from '@/components/tasks/CreateTaskModal';

interface Props {
  initialTasks: Task[];
  project: Project;
}

export default function ProjectTasksSection({
  initialTasks,
  project,
}: Props) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleCreate(task: Task) {
    setTasks((prev) => [task, ...prev]);
    setIsModalOpen(false);
  }

  function handleStatusToggle(taskId: string) {
    setTasks((prev) =>
      prev.map((task) =>
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
function handleUpdateTitle(taskId: string, title: string) {
  setTasks(prev =>
    prev.map(task =>
      task.id === taskId ? { ...task, title } : task
    )
  );
}

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Tasks</h2>

        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          + New Task
        </button>
      </div>

      <TasksTable
        tasks={tasks}
        projects={[]}
        onStatusToggle={handleStatusToggle}
        onUpdateTitle={handleUpdateTitle}
      />

      <CreateTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreate}
         projects={[project]}
        defaultProjectId={project.id}
      />
    </div>
  );
}
