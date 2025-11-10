"use client";

import { useState, useEffect } from "react";
import { Project } from "../types/project";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  projects: Project[];
}

export default function PortfolioGrid({ projects }: Props) {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay (e.g., fetching data)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Skeleton placeholders
    return (
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-black">
            My Projects
          </h2>

          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden animate-pulse flex flex-col"
              >
                <div className="w-full h-48 bg-gray-200" />
                <div className="p-5 flex flex-col flex-grow space-y-3">
                  <div className="w-3/4 h-5 bg-gray-300 rounded" />
                  <div className="w-full h-4 bg-gray-200 rounded" />
                  <div className="w-5/6 h-4 bg-gray-200 rounded" />
                  <div className="flex justify-between mt-4">
                    <div className="w-20 h-8 bg-gray-300 rounded-lg" />
                    <div className="w-20 h-8 bg-gray-300 rounded-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return <p className="text-center text-gray-500">No projects available.</p>;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-black">
          My Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 border border-white/20 backdrop-blur-xl hover:shadow-xl rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={`/${project.image}`}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 flex-grow">{project.description}</p>

                <div className="mt-4 flex justify-between">
                  <a
                    href={project.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
                  >
                    Live Site
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 text-sm font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
