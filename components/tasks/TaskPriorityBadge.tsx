import { TaskPriority } from '@/lib/types';

interface Props {
  priority: TaskPriority;
}

const priorityStyles: Record<TaskPriority, string> = {
  low: 'bg-gray-100 text-gray-600',
  medium: 'bg-yellow-100 text-yellow-700',
  high: 'bg-red-100 text-red-700',
};

export default function TaskPriorityBadge({ priority }: Props) {
  return (
    <span
      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${priorityStyles[priority]}`}
    >
      {priority}
    </span>
  );
}
