"use client";

import Link from "next/link";
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

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-700 z-50 text-black dark:text-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            Ashbel King'ori
          </Link>

          {/* Nav links */}
          <div className="flex items-center space-x-4">
            {items.map((item) => {
                const active = pathname === item.href;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300
                            hover:bg-white/40 hover:backdrop-blur-md hover:shadow-md
                            ${pathname === item.href ? "bg-white/40 backdrop-blur-md shadow-md" : ""}`}
                        >
                        <span className="text-blue-600">{item.icon}</span>
                        <span>{item.label}</span>
                    </Link>
                );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
