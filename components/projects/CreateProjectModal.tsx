'use client';

import { useState, useEffect } from 'react';
import { Project, ProjectStatus } from '@/lib/types';

interface CreateProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (project: Project) => void;
  onUpdate: (project: Project) => void;
  project?: Project;
}



export default function CreateProjectModal( {
  isOpen,
  onClose,
  onCreate,
  onUpdate,
  project,
}

: CreateProjectModalProps){
   const isEditMode = Boolean(project);

 const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<ProjectStatus>('active');
useEffect(() => {
  function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') onClose();
  }

  document.addEventListener('keydown', onKeyDown);
  return () => document.removeEventListener('keydown', onKeyDown);
}, [onClose]);

 function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  if (isEditMode && project) {
    onUpdate({
      ...project,
      name,
      description,
      status,
    });
  } else {
    onCreate({
      id: crypto.randomUUID(),
      name,
      description,
      status,
      ownerId: '1',
      createdAt: new Date().toISOString(),
    });
  }

  onClose();
}


  return (
    <>
    

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
           <h2 className="mb-4 text-lg font-semibold">
  {isEditMode ? 'Edit Project' : 'Create Project'}
</h2>

<button type="submit">
  {isEditMode ? 'Save Changes' : 'Create'}
</button>


            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as ProjectStatus)}
                  className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
                >
                  <option value="active">Active</option>
                  <option value="paused">Paused</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => onClose()}
                  className="rounded-md border px-4 py-2 text-sm"
                >
                  Cancel
                </button>
                <button
  type="submit"
  className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white"
>
  {isEditMode ? 'Save Changes' : 'Create'}
</button>

              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
