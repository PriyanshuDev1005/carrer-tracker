'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-gradient-to-r from-[#1D4571] to-[#1D4571] shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-white text-2xl font-bold">
                    CareerTracker
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-8 text-white font-medium">
                    <Link href="/signup" className="hover:text-gray-300">SignUp</Link>
                    <Link href="/worklog" className="hover:text-gray-300">Work Log</Link>
                    <Link href="/tasks" className="hover:text-gray-300">Daily Tasks</Link>
                    <Link href="/goals" className="hover:text-gray-300">Career Goals</Link>
                    <Link href="/charts" className="hover:text-gray-300">Progress Charts</Link>
                    <Link href="/reports" className="hover:text-gray-300">Reports</Link>
                </div>

                {/* Profile Button */}
                <div className="hidden md:block">
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-xl font-semibold hover:bg-gray-100 transition">
                        My Profile
                    </button>
                </div>

                {/* Mobile Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <X size={30} color="white" /> : <Menu size={30} color="white" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 space-y-4 text-white font-medium flex flex-col items-center">
                    <Link href="/worklog" onClick={toggleMenu}>Work Log</Link>
                    <Link href="/tasks" onClick={toggleMenu}>Daily Tasks</Link>
                    <Link href="/goals" onClick={toggleMenu}>Career Goals</Link>
                    <Link href="/charts" onClick={toggleMenu}>Progress Charts</Link>
                    <Link href="/reports" onClick={toggleMenu}>Reports</Link>
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-xl font-semibold hover:bg-gray-100 transition" onClick={toggleMenu}>
                        My Profile
                    </button>
                </div>
            )}
        </nav>
    );
}
