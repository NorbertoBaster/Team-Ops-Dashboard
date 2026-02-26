'use client';

import { useState } from 'react';
import { Team } from '@/lib/types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (team: Team) => void;
  initialTeam?: Team;
}

export default function CreateTeamModal({
  isOpen,
  onClose,
  onCreate,
  initialTeam,
}: Props) {
  // Initialize once per open
  const [name, setName] = useState(() => initialTeam?.name ?? '');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const team: Team = {
      id: initialTeam?.id ?? crypto.randomUUID(),
      name: name.trim(),
      memberCount: initialTeam?.memberCount ?? 0,
      createdAt: initialTeam?.createdAt ?? new Date().toISOString(),
    };

    onCreate(team);
    handleClose();
  }

  function handleClose() {
    setName(initialTeam?.name ?? '');
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-lg font-semibold">
          {initialTeam ? 'Edit Team' : 'Create Team'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Team Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoFocus
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={handleClose}
              className="rounded-md border px-4 py-2 text-sm hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={!name.trim()}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {initialTeam ? 'Save changes' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}