import DashboardOverview from '@/components/DashboardOverview';

export default function DashboardPage() {
  const userRole = "super_admin"; // Hardcoded for now, can be fetched from auth system

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <DashboardOverview role={userRole} />
    </div>
  );
}
