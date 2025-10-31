"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface NavbarProps {
  items: NavItem[];
}

export default function Navbar({ items }: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 text-black shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/#hero" className="text-2xl font-bold flex items-center gap-1 text-blue-600">
            <span>&lt;/&gt;</span> Ashbel King&apos;ori
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300
                    hover:bg-white/40 hover:backdrop-blur-md hover:shadow-md
                    ${active ? "bg-white/40 backdrop-blur-md shadow-md" : ""}`}
                >
                  <span className="text-blue-600">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-blue-600 hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={closeMenu} // 👈 clicking anywhere closes menu
        >
          {/* Stop propagation so clicking inside the dropdown doesn’t close it */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-16 right-4 left-4 bg-white rounded-2xl shadow-lg p-6 space-y-4 animate-slideDown"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu} // also closes when clicking a link
                className={`flex items-center gap-3 p-3 rounded-xl text-lg transition
                  hover:bg-blue-50 ${
                    pathname === item.href ? "bg-blue-100 font-medium" : ""
                  }`}
              >
                <span className="text-blue-600">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
