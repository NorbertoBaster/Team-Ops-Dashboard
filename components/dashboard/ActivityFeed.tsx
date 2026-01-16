import { Activity } from '@/lib/types';

interface ActivityFeedProps {
  activities: Activity[];
}

export default function ActivityFeed({ activities }: ActivityFeedProps) {
  if (activities.length === 0) {
    return (
      <div className="rounded-lg border bg-white p-6 text-gray-500">
        No recent activity
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-white">
      <div className="border-b p-4 font-medium">
        Recent Activity
      </div>

      <ul className="divide-y">
        {activities.map(activity => (
          <li key={activity.id} className="p-4 text-sm">
            <p>{activity.message}</p>
            <p className="mt-1 text-xs text-gray-500">
              {new Date(activity.createdAt).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
