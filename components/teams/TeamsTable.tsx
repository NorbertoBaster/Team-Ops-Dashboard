import { Team } from '@/lib/types';

interface TeamsTableProps {
  teams: Team[];
}

export default function TeamsTable({ teams }: TeamsTableProps) {
  if (teams.length === 0) {
    return (
      <div className="rounded-lg border bg-white p-6 text-gray-500">
        No teams yet.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border bg-white">
      <table className="min-w-full divide-y">
        <thead className="bg-gray-50 text-sm">
          <tr>
            <th className="px-4 py-3 text-left font-medium">Name</th>
            <th className="px-4 py-3 text-left font-medium">Members</th>
            <th className="px-4 py-3 text-left font-medium">Created</th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {teams.map((team) => (
            <tr key={team.id} className="text-sm">
              <td className="px-4 py-3 font-medium">{team.name}</td>

              <td className="px-4 py-3 text-gray-600">
                {team.memberCount}
              </td>

              <td className="px-4 py-3 text-gray-500">
                {new Date(team.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
