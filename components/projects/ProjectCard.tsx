import Link from 'next/link';
import { Project } from '@/lib/types';
import ProjectStatusBadge from './ProjectStatusBadge';

interface Props {
  project: Project;
  taskCount: number;
  progress: number;
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
}

export default function ProjectCard({
  project,
  taskCount,
  progress,
  onEdit,
  onDelete,
}: Props) {
   return (
    <div className="rounded-lg border bg-white p-4 space-y-3 relative">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold">{project.name}</h3>
          <p className="text-sm text-muted-foreground">
            {taskCount} tasks
          </p>
        </div>

        <ProjectStatusBadge status={project.status} />
      </div>

      {/* Progress */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{progress}% complete</span>
        </div>

        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 pt-2 border-t">
        <button
          onClick={() => onEdit(project)}
          className="text-sm text-blue-600 hover:underline"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(project.id)}
          className="text-sm text-red-600 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
