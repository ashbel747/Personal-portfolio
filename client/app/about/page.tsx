"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Search, Palette } from "lucide-react";
import { JSX } from "react";

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
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
    icon: <Code2 className="w-8 h-8 text-blue-600 mb-3" />,
  },
  {
    title: "SEO Optimization",
    description:
      "Improving search visibility and website performance with proven SEO strategies.",
    icon: <Search className="w-8 h-8 text-blue-600 mb-3" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting elegant and engaging user interfaces that combine aesthetics with usability for a seamless digital experience.",
    icon: <Palette className="w-8 h-8 text-blue-600 mb-3" />,
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white text-black p-6 md:p-12">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-12 text-black"
      >
        About Me
      </motion.h2>

      {loading ? (
        /* Skeleton Loader */
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            {/* Skeleton Intro */}
            <div className="h-5 bg-gray-200 rounded w-3/4 mx-auto mb-8"></div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-gray-100 h-40 flex flex-col justify-center"
                >
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-3"></div>
                  <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-6 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Intro Section */}
          <div className="max-w-3xl mx-auto text-left mb-16">
            <p className="text-lg text-gray-700">
              I'm a passionate Full-Stack Developer dedicated to building beautiful, high-performance, and scalable web experiences. My mission is to craft digital products that not only look good but also deliver real value to users and businesses alike.
            </p>
          </div>

          {/* Services Section */}
          <h3 className="text-3xl font-bold text-center mb-10 text-black">
            What I Do
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gray-100 border border-white/20 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  {service.icon}
                  <h4 className="text-xl font-semibold mb-2 text-blue-600">
                    {service.title}
                  </h4>
                  <p className="text-gray-900">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>


          {/* Skills Section */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center text-black">
              My Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-black">
                      {skill.name}
                    </span>
                    <span className="text-sm font-medium text-black">
                      {skill.level}%
                    </span>
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
        </>
      )}
    </section>
  );
}
