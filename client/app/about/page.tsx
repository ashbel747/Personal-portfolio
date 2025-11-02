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
    title: "UI/UX designer",
    description:
      "Crafting elegant and engaging user interfaces that combine aesthetics with usability for a seamless digital experience",
  },
];

const skills: Skill[] = [
  { name: "TypeScript", level: 85 },
  { name: "HTML/CSS", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "Nest.js", level: 86 },
  { name: "SEO Optimization", level: 80 },
  { name: "UI/UX Design", level: 84 },
];

export default function About() {
  return (
    <section className="bg-white text-black p-3">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-12 text-black">What I Do</h2>

      {/* Services Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {services.map((service: Service, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl shadow-md bg-gray-50 text-black"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-600">{service.title}</h3>
            <p className="text-black">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Skills Section */}
      <div>
        <h3 className="text-2xl font-bold mb-8 text-center text-black">My Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-5">
          {skills.map((skill: Skill, index: number) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-black">{skill.name}</span>
                <span className="text-sm font-medium text-black">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
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
