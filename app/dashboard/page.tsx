import { fetchDashboardData } from '@/lib/api/dashboard';
import DashboardStats from '@/components/dashboard/DashboardStats';
import ActivityFeed from '@/components/dashboard/ActivityFeed';


export default async function DashboardPage() {
  const data = await fetchDashboardData();

  return (
    <div className="space-y-6">
      <DashboardStats
        totalProjects={data.totalProjects}
        totalTasks={data.totalTasks}
        completedTasks={data.completedTasks}
      />

      <ActivityFeed activities={data.recentActivity} />
    </div>
  );
}
