'use client';
import React from "react";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location?: string;
  description: string[];
  technologies?: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    company: "Akaademy",
    position: "Teaching Assistant (TA)",
    duration: "Jan 2024 - Sept 2025",
    location: "Edtech Platform",
    description: [
      "Served as a Teaching Assistant at Akaademy, an edtech platform for Data Science, Data Analysis, Business Intelligence, and Machine Learning",
      "Assisted in module creation and assignment design to support project-based learning",
      "Reviewed and graded student assignments, providing constructive feedback",
      "Conducted problem-solving sessions and supported students in resolving queries to enhance their learning experience",
    ],
    technologies: ["Data Science", "Data Analysis", "Business Intelligence", "Machine Learning", "Python"],
  },
];

const Experience = () => {
  return (
    <section className="w-full mt-25 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 justify-center items-center">
        
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Experience"
            description="My professional journey and work history"
            subtitle="Work Experience"
          />
        </motion.div>

        {/* Timeline */}
        <div className="w-full max-w-4xl">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 border-l-2 border-gray-200 dark:border-gray-700 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900" />

              {/* Content Card */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                
                {/* Company & Position */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium text-sm md:text-base">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    {exp.location && <span>{exp.location}</span>}
                  </div>
                </div>

                {/* Description */}
                <ul className="list-disc list-inside space-y-2 mb-4 text-sm md:text-base text-gray-700 dark:text-gray-300">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="leading-relaxed">{desc}</li>
                  ))}
                </ul>

                {/* Technologies */}
                {exp.technologies && (
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 md:px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
