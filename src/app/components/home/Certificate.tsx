'use client';
import React from "react";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";

export interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
  skills?: string[];
}

export const certificatesData: CertificateItem[] = [
  {
    title: "Certificate Name",
    issuer: "Issuing Organization",
    date: "Jan 2023",
    credentialId: "ABC123XYZ",
    credentialUrl: "https://example.com/verify",
    description: "Description of what this certificate represents and the skills gained.",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
  },
  {
    title: "Another Certificate",
    issuer: "Platform Name",
    date: "Jun 2022",
    credentialUrl: "https://example.com/verify",
    description: "Brief description of the certification program and achievements.",
    skills: ["React", "Next.js", "TypeScript"],
  },
  // Add your actual certificates here
];

const Certificate = () => {
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
            title="Certificates"
            description="Professional certifications and achievements"
            subtitle="Certifications"
          />
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {certificatesData.map((cert, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Award Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <Award className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    aria-label="View certificate"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

              {/* Certificate Title */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-sm md:text-base text-blue-600 dark:text-blue-400 font-medium mb-3">
                {cert.issuer}
              </p>

              {/* Date */}
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-3">
                <Calendar size={14} />
                <span>{cert.date}</span>
              </div>

              {/* Description */}
              {cert.description && (
                <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>
              )}

              {/* Credential ID */}
              {cert.credentialId && (
                <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 mb-4 break-all">
                  Credential ID: {cert.credentialId}
                </p>
              )}

              {/* Skills */}
              {cert.skills && cert.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 md:py-1 text-[10px] md:text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificate;
