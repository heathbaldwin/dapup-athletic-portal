import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-semibold mb-4">Athletic Department Dashboard</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">Total Deals: $100K</div>
          <div className="bg-white p-4 rounded shadow">Pending Approvals: 12</div>
          <div className="bg-white p-4 rounded shadow">Active Athletes: 87</div>
        </div>
      </main>
    </div>
  );
}
