"use client";

import { Mail, Github, Linkedin, Twitter, Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Column 1 - Name */}
          <div>
            <h2 className="text-xl font-semibold">Ashbel King'ori</h2>
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
        <div className="border-t border-gray-300 dark:border-gray-600 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Built with passion by Ashbel King'ori.
        </div>
      </div>
    </footer>
  );
}
