'use client';

import { useState } from 'react';
import { Project, Task } from '@/lib/types';
import ProjectTasks from '@/components/projects/ProjectTasks';
import ProjectStatusBadge from '@/components/projects/ProjectStatusBadge';

interface Props {
  project: Project;
  initialTasks: Task[];
}

export default function ProjectClient({ project, initialTasks }: Props) {
  const [taskCount, setTaskCount] = useState(initialTasks.length);
  const [progress, setProgress] = useState(0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold">{project.name}</h1>
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs">
              {taskCount} tasks
            </span>
          </div>

          {project.description && (
            <p className="mt-1 text-muted-foreground">
              {project.description}
            </p>
          )}
        </div>

        <ProjectStatusBadge status={project.status} />
      </div>

      {/* Progress */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{progress}% completed</span>
        </div>

        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Tasks */}
      <ProjectTasks
        project={project}
        initialTasks={initialTasks}
        onStatsChange={(count, progress) => {
          setTaskCount(count);
          setProgress(progress);
        }}
      />
    </div>
  );
}
