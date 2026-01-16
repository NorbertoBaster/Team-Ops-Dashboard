'use client';

import { Project } from '@/lib/types';
import ProjectStatusBadge from '@/components/projects/ProjectStatusBadge';
import Link from 'next/link';


interface ProjectsTableProps {
  projects: Project[];
  onDelete: (id: string) => void;
  onEdit: (project: Project) => void;
}


export default function ProjectsTable({ projects, onDelete, onEdit }: ProjectsTableProps) 
{
   function isSeededProject(id: string) {
  return id.length < 10;
}
  if (projects.length === 0) {
  
    return (
      <div className="rounded-lg border bg-white p-10 text-center">
  <p className="text-sm font-medium text-foreground">
    No projects yet
  </p>
  <p className="mt-1 text-sm text-muted-foreground">
    Get started by creating your first project.
  </p>
</div>

    );
  }

  return (
    <div className="overflow-hidden rounded-lg border bg-white transition-shadow hover:shadow-sm">
      <table className="min-w-full divide-y">
        <thead className="bg-gray-50 text-sm">
          <tr>
            <th className="px-4 py-3 text-left font-medium">Name</th>
            <th className="px-4 py-3 text-left font-medium">Status</th>
            <th className="px-4 py-3 text-left font-medium">Created</th>
            <th className="px-4 py-3 text-right font-medium">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {projects.map(project => (
            <tr key={project.id} className="text-sm hover:bg-muted/50 transition cursor-default">
              <td className="px-4 py-3">
  {isSeededProject(project.id) ? (
  <Link
    href={`/projects/${project.id}`}
    className="font-medium text-foreground hover:underline"
  >
    {project.name}
  </Link>
) : (
  <span className="font-medium text-muted-foreground">
    {project.name}
  </span>
)}


  {project.description && (
    <p className="text-sm text-muted-foreground line-clamp-1">
      {project.description}
    </p>
  )}
</td>


              <td className="px-4 py-3">
  <span className="inline-flex items-center gap-1">
    <ProjectStatusBadge status={project.status} />
  </span>
</td>

              <td className="px-4 py-3 text-gray-500">
                {new Date(project.createdAt).toLocaleDateString()}
              </td>
 <td className="px-4 py-3 text-right">
  <button
    onClick={() => onEdit(project)}
    className="text-sm text-blue-600 hover:text-blue-700 hover:underline mr-3"
  >
    Edit
  </button>

  <button
    onClick={() => onDelete(project.id)}
    className="text-sm text-red-600 hover:text-red-700 hover:underline"
  >
    Delete
  </button>
</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
