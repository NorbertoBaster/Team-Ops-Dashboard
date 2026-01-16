'use client';

import { useState } from 'react';
import { Task, Project } from '@/lib/types';
import TaskStatusBadge from '@/components/tasks/TaskStatusBadge';
import TaskPriorityBadge from '@/components/tasks/TaskPriorityBadge';

interface TasksTableProps {
  tasks: Task[];
  onStatusToggle: (id: string) => void;
  onUpdateTitle: (id: string, title: string) => void;
  projects?: Project[];
}

export default function TasksTable({
  tasks,
  onStatusToggle,
  onUpdateTitle,
  projects,
}: TasksTableProps) {
  /* ✅ Hooks MUST be at the top */
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draftTitle, setDraftTitle] = useState('');

  function startEdit(task: Task) {
    setEditingId(task.id);
    setDraftTitle(task.title);
  }

  function cancelEdit() {
    setEditingId(null);
    setDraftTitle('');
  }

  function saveEdit(taskId: string) {
    if (!draftTitle.trim()) return;
    onUpdateTitle(taskId, draftTitle.trim());
    cancelEdit();
  }

  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-sm font-medium">No tasks yet</p>
        <p className="text-sm text-muted-foreground">
          Tasks will appear here once they’re created.
        </p>
      </div>
    );
  }

  const projectMap = projects
    ? Object.fromEntries(projects.map(p => [p.id, p.name]))
    : null;

  const showProjectColumn = Boolean(projectMap);

  return (
    <div className="overflow-hidden rounded-lg border bg-white">
      <table className="min-w-full divide-y">
        <thead className="bg-gray-50 text-sm">
          <tr>
            <th className="px-4 py-3 text-left font-medium">Title</th>
            {showProjectColumn && (
              <th className="px-4 py-3 text-left font-medium">Project</th>
            )}
            <th className="px-4 py-3 text-left font-medium">Status</th>
            <th className="px-4 py-3 text-left font-medium">Priority</th>
            <th className="px-4 py-3 text-left font-medium">Assignee</th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {tasks.map(task => (
            <tr key={task.id} className="text-sm">
              <td className="px-4 py-3 font-medium">
                {editingId === task.id ? (
                  <input
                    value={draftTitle}
                    onChange={e => setDraftTitle(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') saveEdit(task.id);
                      if (e.key === 'Escape') cancelEdit();
                    }}
                    onBlur={cancelEdit}
                    className="w-full rounded border px-2 py-1 text-sm"
                    autoFocus
                  />
                ) : (
                  <span
                    onClick={() => startEdit(task)}
                    className="cursor-pointer hover:underline"
                  >
                    {task.title}
                  </span>
                )}
              </td>

              {showProjectColumn && (
                <td className="px-4 py-3 text-muted-foreground">
                  {projectMap?.[task.projectId] ?? '—'}
                </td>
              )}

              <td className="px-4 py-3">
                <button
                  onClick={() => onStatusToggle(task.id)}
                  className="hover:opacity-80 transition"
                >
                  <TaskStatusBadge status={task.status} />
                </button>
              </td>

              <td className="px-4 py-3">
                <TaskPriorityBadge priority={task.priority} />
              </td>

              <td className="px-4 py-3 text-muted-foreground">
                {task.assigneeId ?? '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
