'use client';

import { useState } from 'react';
import { Team } from '@/lib/types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (team: Team) => void;
}

export default function CreateTeamModal({
  isOpen,
  onClose,
  onCreate,
}: Props) {
  const [name, setName] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newTeam: Team = {
      id: crypto.randomUUID(),
      name,
      memberCount: 0,
      createdAt: new Date().toISOString(),
    };

    onCreate(newTeam);
    setName('');
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-lg font-semibold">Create Team</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Team Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
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
