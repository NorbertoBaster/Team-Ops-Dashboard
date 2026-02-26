'use client';

import { Team } from '@/lib/types';

interface Props {
  isOpen: boolean;
  team: Team | null;
  onCancel: () => void;
  onConfirm: (teamId: string) => void;
}

export default function DeleteTeamModal({
  isOpen,
  team,
  onCancel,
  onConfirm,
}: Props) {
  if (!isOpen || !team) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-2 text-lg font-semibold text-red-600">
          Delete team
        </h2>

        <p className="mb-6 text-sm text-gray-600">
          Are you sure you want to delete{' '}
          <span className="font-medium">{team.name}</span>?  
          This action cannot be undone.
        </p>

        <div className="flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="rounded-md border px-4 py-2 text-sm hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            onClick={() => onConfirm(team.id)}
            className="rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}