import DashboardOverview from '@/components/DashboardOverview';

export default function DashboardPage() {
  const userRole = "super_admin"; // Hardcoded for now, can be fetched from auth system

  return (
    <div>
      <DashboardOverview role={userRole} />
    </div>
  );
}
