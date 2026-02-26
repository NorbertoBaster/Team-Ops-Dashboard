'use client';

import { Team } from '@/lib/types';

interface TeamsTableProps {
  teams: Team[];
  onEdit: (team: Team) => void;
  onDelete: (teamId: string) => void;
}

export default function TeamsTable({
  teams,
  onEdit,
  onDelete,
}: TeamsTableProps) {
  if (!teams || teams.length === 0) {
    return (
      <div className="text-center text-gray-500 text-sm">
        No teams available.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border bg-white">
      <table className="min-w-full divide-y">
        <thead className="bg-gray-50 text-sm">
          <tr>
            <th className="px-4 py-3 text-left font-medium">Team Name</th>
            <th className="px-4 py-3 text-right font-medium">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y text-sm">
          {teams.map(team => (
            <tr key={team.id}>
              <td className="px-4 py-3">{team.name}</td>

              <td className="px-4 py-3 text-right">
                <div className="inline-flex gap-2">
                  <button
                    onClick={() => onEdit(team)}
                    className="rounded-md px-2 py-1 text-xs text-blue-600 hover:bg-blue-50"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(team.id)}
                    className="rounded-md px-2 py-1 text-xs text-red-600 hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}