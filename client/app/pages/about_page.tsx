"use client";

import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
}

interface Skill {
  name: string;
  level: number;
}

const services: Service[] = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building modern, scalable, and user-friendly websites using the latest technologies.",
  },
  {
    title: "SEO Optimization",
    description:
      "Improving search visibility and website performance with proven SEO strategies.",
  },
  {
    title: "DevOps Engineering",
    description:
      "Streamlining CI/CD pipelines, cloud deployments, and monitoring for efficient delivery.",
  },
];

const skills: Skill[] = [
  { name: "TypeScript", level: 85 },
  { name: "JavaScript", level: 90 },
  { name: "HTML/CSS", level: 95 },
];

export default function About() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>

      {/* Services Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {services.map((service: Service, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800"
          >
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Skills Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-8 text-center">My Skills</h3>
        <div className="space-y-6">
          {skills.map((skill: Skill, index: number) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, delay: index * 0.3 }}
                  className="bg-blue-600 h-3 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
