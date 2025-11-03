import "./globals.css"; 
import Navbar from "./components/Navbar";
import { Flag, Info, Mail, Scroll, } from "lucide-react";

const navItems = [
  { label: "About", href: "/#about", icon: <Info size={20} /> },
  { label: "Projects", href: "/#projects", icon: <Scroll size={20} /> },
  { label: "My journey", href: "/#journey", icon: <Flag size={20} /> },
  { label: "Contact Me", href: "/#contact", icon: <Mail size={20} /> },
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
        <main>{children}</main>
      </body>
    </html>
  );
}
