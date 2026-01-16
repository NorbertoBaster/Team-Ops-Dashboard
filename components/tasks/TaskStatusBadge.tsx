import { TaskStatus } from '@/lib/types';

interface Props {
  status: TaskStatus;
}

const statusStyles: Record<TaskStatus, string> = {
  todo: 'bg-gray-100 text-gray-700',
  in_progress: 'bg-blue-100 text-blue-700',
  done: 'bg-green-100 text-green-700',
};

export default function TaskStatusBadge({ status }: Props) {
  return (
    <span
      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${statusStyles[status]}`}
    >
      {status.replace('_', ' ')}
    </span>
  );
}
