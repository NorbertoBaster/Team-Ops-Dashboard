// components/teams/TeamsWrapper.tsx
'use client';

import { useState } from 'react';
import { Team } from '@/lib/types';
import TeamsTable from '@/components/teams/TeamsTable';

interface TeamsWrapperProps {
  initialTeams: Team[];
}

export default function TeamsWrapper({ initialTeams }: TeamsWrapperProps) {
  const [teams, setTeams] = useState<Team[]>(initialTeams);

  // Optional: add a team (if you want a button later)
  function handleCreate(team: Team) {
    setTeams(prev => [team, ...prev]);
  }

  return (
    <div className="space-y-4">
      {/* You can add a "New Team" button here later if needed */}
      <TeamsTable teams={teams} />
    </div>
  );
}