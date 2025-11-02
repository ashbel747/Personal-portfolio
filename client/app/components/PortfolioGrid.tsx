"use client";

import { Project } from "../types/project";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  projects: Project[];
}

export default function PortfolioGrid({ projects }: Props) {
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
                className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={`/${project.image}`} // served from public/
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 flex-grow">
                  {project.description}
                </p>

                {/* Buttons */}
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
