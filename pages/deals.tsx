import Sidebar from '../components/Sidebar';

const dummyDeals = [
  {
    business: 'Champaign Smoothies',
    athlete: 'Maya Carter',
    value: 750,
    status: 'Pending',
    date: '2025-05-02',
  },
  {
    business: 'Ford Dealership',
    athlete: 'Jalen Brooks',
    value: 1200,
    status: 'Approved',
    date: '2025-04-18',
  },
  {
    business: 'Performance Gym',
    athlete: 'Liam James',
    value: 950,
    status: 'Completed',
    date: '2025-04-10',
  },
];

export default function Deals() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-semibold mb-4">NIL Deals</h1>
        <table className="w-full table-auto border-collapse bg-white rounded shadow">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Business</th>
              <th className="p-3">Athlete</th>
              <th className="p-3">Value</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {dummyDeals.map((deal, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                <td className="p-3">{deal.business}</td>
                <td className="p-3">{deal.athlete}</td>
                <td className="p-3">${deal.value.toLocaleString()}</td>
                <td className="p-3">{deal.status}</td>
                <td className="p-3">{deal.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
