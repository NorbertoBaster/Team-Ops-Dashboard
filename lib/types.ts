export type UserRole = 'admin' | 'member';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
}

export type ProjectStatus = 'active' | 'paused' | 'completed';

export interface Project {
  id: string;
  name: string;
  description?: string;
  status: ProjectStatus;
  ownerId: string;
  createdAt: string;
}

export type TaskStatus = 'todo' | 'in_progress' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high';

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  projectId: string;
  assigneeId?: string;
  dueDate?: string;
  createdAt: string;
}

export interface Activity {
  id: string;
  type: 'task_created' | 'task_updated' | 'project_created';
  message: string;
  createdAt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member';
}

export interface Team {
id: string;
  name: string;
  description?: string;       // optional description
  memberIds?: string[];       // array of member IDs
  createdAt: string;
   memberCount: number;
}

