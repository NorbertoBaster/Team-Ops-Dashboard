'use client';

import { useState } from 'react';
import { Team } from '@/lib/types';
import TeamsTable from '@/components/teams/TeamsTable';
import CreateTeamModal from '@/components/teams/CreateTeamModal';
import DeleteTeamModal from '@/components/teams/DeleteTeamModal';

interface TeamsWrapperProps {
  initialTeams: Team[];
}

export default function TeamsWrapper({ initialTeams }: TeamsWrapperProps) {
  const [teams, setTeams] = useState<Team[]>(initialTeams);

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingTeam, setEditingTeam] = useState<Team | null>(null);

  const [teamToDelete, setTeamToDelete] = useState<Team | null>(null);

  function handleCreateOrEdit(team: Team) {
    setTeams(prev => {
      const exists = prev.find(t => t.id === team.id);
      if (exists) {
        return prev.map(t => (t.id === team.id ? team : t));
      }
      return [team, ...prev];
    });

    setEditingTeam(null);
    setIsCreateOpen(false);
  }

  function handleEdit(team: Team) {
    setEditingTeam(team);
    setIsCreateOpen(true);
  }

  function requestDelete(teamId: string) {
    const team = teams.find(t => t.id === teamId);
    if (team) setTeamToDelete(team);
  }

  function confirmDelete(teamId: string) {
    setTeams(prev => prev.filter(t => t.id !== teamId));
    setTeamToDelete(null);
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Teams</h2>

        <button
          onClick={() => {
            setEditingTeam(null);
            setIsCreateOpen(true);
          }}
          className="rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white"
        >
          + New Team
        </button>
      </div>

      {/* Table */}
      <TeamsTable
        teams={teams}
        onEdit={handleEdit}
        onDelete={requestDelete}
      />

      {/* Create / Edit */}
      <CreateTeamModal
        isOpen={isCreateOpen}
        onClose={() => {
          setIsCreateOpen(false);
          setEditingTeam(null);
        }}
        onCreate={handleCreateOrEdit}
        initialTeam={editingTeam ?? undefined}
      />

      {/* Delete confirmation */}
      <DeleteTeamModal
        isOpen={!!teamToDelete}
        team={teamToDelete}
        onCancel={() => setTeamToDelete(null)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}