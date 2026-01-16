'use client';

import { useState } from 'react';
import { Team } from '@/lib/types';
import TeamsTable from '@/components/teams/TeamsTable';
import CreateTeamModal from '@/components/teams/CreateTeamModal';

interface Props {
  initialTeams: Team[];
}

export default function TeamsWrapper({ initialTeams }: Props) {
  const [teams, setTeams] = useState<Team[]>(initialTeams);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleCreate(team: Team) {
    setTeams((prev) => [team, ...prev]);
  }

  return (
    <>
      <div className="flex justify-end">
        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          + New Team
        </button>
      </div>

      <TeamsTable teams={teams} />

      <CreateTeamModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreate}
      />
    </>
  );
}
