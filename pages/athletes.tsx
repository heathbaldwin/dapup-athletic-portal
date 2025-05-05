import Sidebar from '../components/Sidebar';

const dummyAthletes = [
  { name: 'Jalen Brooks', sport: 'Football', status: 'Active', totalEarned: 12500 },
  { name: 'Maya Carter', sport: 'Track & Field', status: 'Inactive', totalEarned: 8700 },
  { name: 'Liam James', sport: 'Basketball', status: 'Active', totalEarned: 15200 },
];

export default function Athletes() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-semibold mb-4">Athletes</h1>
        <table className="w-full table-auto border-collapse bg-white rounded shadow">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Sport</th>
              <th className="p-3">Status</th>
              <th className="p-3">Total Earned</th>
            </tr>
          </thead>
          <tbody>
            {dummyAthletes.map((athlete) => (
              <tr key={athlete.name} className="border-t hover:bg-gray-50">
                <td className="p-3">{athlete.name}</td>
                <td className="p-3">{athlete.sport}</td>
                <td className="p-3">{athlete.status}</td>
                <td className="p-3">${athlete.totalEarned.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
