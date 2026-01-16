import { Project } from '@/lib/types';
import { projects } from '../data/projects';


export async function fetchProjects(): Promise<Project[]> {
  await new Promise((res) => setTimeout(res, 500));
  return projects;
}
