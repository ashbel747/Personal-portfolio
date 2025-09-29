import "./globals.css"; 
import Navbar from "./components/Navbar";
import { Home, Info, Mail, User } from "lucide-react";

const navItems = [
  { label: "Home", href: "/", icon: <Home size={20} /> },
  { label: "About", href: "/about", icon: <Info size={20} /> },
  { label: "Contact", href: "/contact", icon: <Mail size={20} /> },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar items={navItems} />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
