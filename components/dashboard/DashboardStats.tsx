interface DashboardStatsProps {
  totalProjects: number;
  totalTasks: number;
  completedTasks: number;
}

export default function DashboardStats({
  totalProjects,
  totalTasks,
  completedTasks,
}: DashboardStatsProps) {
  const stats = [
    { label: 'Projects', value: totalProjects },
    { label: 'Total Tasks', value: totalTasks },
    { label: 'Completed Tasks', value: completedTasks },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map(stat => (
        <div
          key={stat.label}
          className="rounded-lg border bg-white p-4"
        >
          <p className="text-sm text-gray-500">{stat.label}</p>
          <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
