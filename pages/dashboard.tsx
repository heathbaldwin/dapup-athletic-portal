import Layout from '../components/Layout';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Mon', deals: 3 },
  { name: 'Tue', deals: 4 },
  { name: 'Wed', deals: 5 },
  { name: 'Thu', deals: 4 },
  { name: 'Fri', deals: 6 },
];

export default function Dashboard() {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-white">
        {/* Recent Transactions */}
        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-yellow-400 mb-4">Recent Transactions</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-zinc-400">
                <th className="text-left pb-2">Athlete</th>
                <th className="text-left pb-2">Amount</th>
                <th className="text-left pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Emma Williams', '$500', 'Approved'],
                ['Michael Jones', '$750', 'Pending'],
                ['Sarah Loe', '$200', 'Completed'],
                ['James Smith', '$1200', 'Flagged'],
              ].map(([name, amount, status], i) => (
                <tr key={i} className="border-t border-zinc-700">
                  <td className="py-2">{name}</td>
                  <td className="py-2">{amount}</td>
                  <td className="py-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        status === 'Approved'
                          ? 'bg-green-600 text-white'
                          : status === 'Pending'
                          ? 'bg-yellow-600 text-white'
                          : status === 'Completed'
                          ? 'bg-blue-600 text-white'
                          : 'bg-red-600 text-white'
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Athlete Deal Activity (Bar Chart) */}
        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-yellow-400 mb-4">Athlete Deal Activity</h2>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" stroke="#eab308" />
                <YAxis stroke="#eab308" />
                <Tooltip />
                <Bar dataKey="deals" fill="#eab308" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-yellow-400 mb-4">Alerts</h2>
          <p className="text-sm">
            <span className="text-red-500 font-bold">1099 Flagged:</span> Michael Jones
          </p>
        </div>

        {/* Tax Report */}
        <div className="bg-zinc-900 rounded-xl p-6 flex items-center justify-between">
          <p className="text-sm">Download Tax Report</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded">
            Download
          </button>
        </div>
      </div>
    </Layout>
  );
}
