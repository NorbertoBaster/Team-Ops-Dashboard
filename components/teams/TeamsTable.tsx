// components/teams/TeamsTable.tsx
'use client';

import { Team } from '@/lib/types';

interface TeamsTableProps {
  teams: Team[];
}

export default function TeamsTable({ teams }: TeamsTableProps) {
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
          </tr>
        </thead>

        <tbody className="divide-y text-sm">
          {teams.map(team => (
            <tr key={team.id}>
              <td className="px-4 py-3">{team.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}