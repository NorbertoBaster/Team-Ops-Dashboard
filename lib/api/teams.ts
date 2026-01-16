import { Team } from '@/lib/types';
import { teams } from '@/lib/data/teams';

export async function fetchTeams(): Promise<Team[]> {
  await new Promise((res) => setTimeout(res, 400));
  return teams;
}
