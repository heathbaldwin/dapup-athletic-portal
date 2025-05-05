import Sidebar from '../components/Sidebar';

export default function Settings() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-semibold mb-4">Settings</h1>
        <div className="bg-white p-6 rounded shadow space-y-4 max-w-lg">
          <div>
            <label className="block font-semibold mb-1">Admin Email</label>
            <input
              type="email"
              defaultValue="compliance@dapup.com"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Export Format</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2">
              <option>PDF</option>
              <option>CSV</option>
              <option>Excel</option>
            </select>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded">Save Changes</button>
        </div>
      </main>
    </div>
  );
}
