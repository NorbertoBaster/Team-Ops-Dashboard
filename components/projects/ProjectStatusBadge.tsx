import { ProjectStatus } from '@/lib/types';

interface Props {
  status: ProjectStatus;
}

const styles: Record<ProjectStatus, string> = {
  active: 'bg-green-100 text-green-700',
  paused: 'bg-yellow-100 text-yellow-700',
  completed: 'bg-gray-100 text-gray-700',
};

export default function ProjectStatusBadge({ status }: Props) {
  return (
    <span
      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
