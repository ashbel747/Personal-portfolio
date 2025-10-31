"use client";

import { Mail, Github, Linkedin, Twitter, Instagram, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200 shadow-inner py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Column 1 - Name */}
          <div>
            <Link href="/#hero" className="text-2xl font-bold flex items-center gap-1 text-blue-600">
              <span>&lt;/&gt;</span> Ashbel King&apos;ori
            </Link>
            <p className="text-gray-600 mt-1">
              Full-Stack Developer | Building seamless web experiences.
            </p>
          </div>

          {/* Column 2 - Socials */}
          <div className="flex flex-col space-y-3 md:items-end">
            <a
              href="mailto:kashbel747@gmail.com"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <Mail size={18} /> kashbel747@gmail.com
            </a>

            <div className="flex space-x-4">
              <a
                href="tel:+254795524137"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <Phone size={18} />
              </a>

              <a
                href="https://www.instagram.com/_benuella"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://github.com/ashbel747"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <Github size={20} />
              </a>

              <a
                href="https://linkedin.com/in/ashbel-kingori-622132345"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Built with Passion by{" "}
          <span className="text-blue-600 font-medium">Ashbel King&apos;ori</span>.
        </div>
      </div>
    </footer>
  );
}
