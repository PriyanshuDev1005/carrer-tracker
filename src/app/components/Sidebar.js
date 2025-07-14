'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const links = [
    { name: 'Dashboard', href: '/' },
    { name: 'Work Log', href: '/worklog' },
    { name: 'Daily Tasks', href: '/tasks' },
    { name: 'Career Goals', href: '/goals' },
    { name: 'Progress Charts', href: '/charts' },
    { name: 'Reports', href: '/reports' },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`bg-gradient-to-b from-[#04668D] to-[#DA67AC] text-white min-h-screen p-4 transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
        {/* Toggle Button */}
        <button onClick={toggleSidebar} className="mb-6">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Sidebar Links */}
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`block px-3 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition ${
                  pathname === link.href ? 'bg-white text-blue-600 font-semibold' : ''
                }`}
              >
                {isOpen ? link.name : link.name.charAt(0)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        {/* This area will display the page content */}
      </div>
    </div>
  );
}
