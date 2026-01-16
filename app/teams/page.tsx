import { fetchTeams } from '@/lib/api/teams';
import TeamsWrapper from '@/components/teams/TeamsWrapper';

export default async function TeamsPage() {
  const teams = await fetchTeams();

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Teams</h1>

      <TeamsWrapper initialTeams={teams} />
    </div>
  );
}
