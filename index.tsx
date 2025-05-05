import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-semibold">Welcome to DapUp Admin Portal</h1>
        <p className="mt-2 text-gray-600">Use the sidebar to navigate.</p>
      </main>
    </div>
  );
}
