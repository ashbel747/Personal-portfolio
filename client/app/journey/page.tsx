"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

enum ProgressStatus {
  Completed = "Completed",
  Ongoing = "Ongoing",
}

interface EducationItem {
  school: string;
  degree: string;
  year: string;
  progress: ProgressStatus;
}

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  progress: ProgressStatus;
}

/* ---------- Data ---------- */
const educationData: EducationItem[] = [
  {
    school: "Murang'a University of Technology",
    degree: "BSc Computer Science",
    year: "2025 - 2029",
    progress: ProgressStatus.Ongoing,
  },
  {
    school: "DirectEd Development Bootcamp",
    degree: "Full-Stack Web Developer",
    year: "May 2025 - Oct 2025",
    progress: ProgressStatus.Completed,
  },
  {
    school: "Kagumo High School",
    degree: "Kenya Certificate of Secondary Education (KCSE)",
    year: "2020 - 2024",
    progress: ProgressStatus.Completed,
  },
];

const experienceData: ExperienceItem[] = [
  {
    company: "None yet. To add later",
    role: "N/A",
    period: "2025 - Present",
    description:
      "N/A", 
    progress: ProgressStatus.Ongoing,
  },
];

export default function MyJourney() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  /* ---------- Shared Skeleton Card ---------- */
  const SkeletonCard = () => (
    <div className="relative mb-10 pl-12 animate-pulse">
      <div className="absolute left-0 top-3 w-5 h-5 bg-gray-300 rounded-full" />
      <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-3" />
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2" />
        <div className="h-3 bg-gray-200 rounded w-1/3 mb-4" />
        <div className="h-4 bg-gray-300 rounded w-1/4" />
      </div>
    </div>
  );

  /* ---------- Shared Timeline Card ---------- */
  const TimelineCard = ({
    title,
    subtitle,
    time,
    description,
    progress,
    index,
  }: {
    title: string;
    subtitle: string;
    time: string;
    description?: string;
    progress: ProgressStatus;
    index: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative mb-10 pl-12"
    >
      {/* Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.2 }}
        viewport={{ once: true }}
        className={`absolute left-0 top-3 w-5 h-5 rounded-full shadow-md ${
          progress === ProgressStatus.Completed ? "bg-blue-600" : "bg-gray-500"
        }`}
      />

      {/* Content */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="bg-gray-100 border border-white/20 backdrop-blur-xl hover:shadow-xl rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 p-6"
      >
        <h3 className="text-xl font-semibold text-blue-600 mb-1">{title}</h3>
        <p className="text-black font-medium">{subtitle}</p>
        <p className="text-sm text-gray-500 mb-2">{time}</p>

        {description && <p className="text-gray-700 text-sm mb-3">{description}</p>}

        <p
          className={`text-sm font-semibold ${
            progress === ProgressStatus.Completed ? "text-blue-600" : "text-gray-700"
          }`}
        >
          {progress}
        </p>
      </motion.div>
    </motion.div>
  );

  return (
    <section className="bg-white text-black p-6 md:p-12">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-black">
        My Journey
      </h2>

      {/* Responsive two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* EDUCATION SECTION */}
        <div>
          <h3 className="text-3xl font-bold mb-10 text-center text-black">
            Education
          </h3>
          <div className="relative before:content-[''] before:absolute before:left-5 before:top-0 before:bottom-0 before:w-1 before:bg-gray-200">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
              : educationData.map((edu, i) => (
                  <TimelineCard
                    key={i}
                    title={edu.school}
                    subtitle={edu.degree}
                    time={edu.year}
                    progress={edu.progress}
                    index={i}
                  />
                ))}
          </div>
        </div>

        {/* EXPERIENCE SECTION */}
        <div>
          <h3 className="text-3xl font-bold mb-10 text-center text-black">
            Experience
          </h3>
          <div className="relative before:content-[''] before:absolute before:left-5 before:top-0 before:bottom-0 before:w-1 before:bg-gray-200">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
              : experienceData.map((exp, i) => (
                  <TimelineCard
                    key={i}
                    title={exp.company}
                    subtitle={exp.role}
                    time={exp.period}
                    description={exp.description}
                    progress={exp.progress}
                    index={i}
                  />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}
