// app/teams/page.tsx
import TeamsWrapper from '@/components/teams/TeamsWrapper';
import { fetchTeams } from '@/lib/api/teams';

export default async function TeamsPage() {
  // Server-side fetch
  const teams = await fetchTeams();

  // Pass data as props to client component
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Teams</h1>

      <TeamsWrapper
        initialTeams={teams ?? []}  // Always an array
      />
    </div>
  );
}