import Link from 'next/link';

const navItems = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Athletes', href: '/athletes' },
  { name: 'Deals', href: '/deals' },
  { name: 'Documents', href: '/documents' },
  { name: 'Settings', href: '/settings' },
];

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed">
      <div className="p-6 text-xl font-bold">DapUp Admin</div>
      <nav className="flex flex-col gap-2 p-4">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} className="hover:bg-gray-700 p-2 rounded">
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
