'use client';
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string | null;
  demo: string | null;
};

const projects: Project[] = [
  {
    title: "AdventureWorks Power BI Report",
    description:
      "Comprehensive Power BI dashboard analyzing AdventureWorks global manufacturing company performance with executive insights, product details, customer analytics, and geographic trends.",
    image: "/images/projects/Adventure Work.png",
    tags: ["Power BI", "DAX", "Data Modeling", "ETL", "Power Query", "Data Visualization"],
    github: "https://shorturl.at/EGLP4",
    demo: "https://shorturl.at/ezBU8",
  },
];

const Projects = () => {
  const basePath = process.env.NODE_ENV === "production" ? "/Portfolio" : "";
  
  return (
    <section className="w-full mt-25 px-6" id="projects">
      <div className="max-w-7xl mx-auto flex flex-col gap-2 justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Projects"
            subtitle="Featured"
            description="A selection of my recent work demonstrating my skills and experience."
          />
        </motion.div>

       {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.15,
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
          className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 auto-rows-fr items-stretch"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard project={project} basePath={basePath} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

const ProjectCard = ({ project, basePath }: { project: Project; basePath: string }) => {
  return (
    <article className="h-full flex flex-col border border-gray-700 text-gray-300 backdrop-blur-3xl bg-[#161B22]/70 rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-[1.02]">
      {/* Image Section */}
      <div className="relative overflow-hidden aspect-video">
        <Image
          fill
          loading="lazy"
          src={`${basePath}${project.image}`}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6 sm:p-7 gap-4">
        {/* Title + Description */}
        <div>
          <h3 className="font-display text-xl sm:text-xl font-bold mb-2 group-hover:gradient-text transition-all tracking-tight">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm sm:text-base leading-normal">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-gray-700 bg-[#0D1117] text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Push the buttons to the bottom */}
        <div className="mt-auto flex gap-3 pt-4 border-t border-gray-800">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex justify-center items-center py-2.5 rounded-lg border border-gray-700 hover:border-red-500 hover:text-red-500 transition-all"
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
