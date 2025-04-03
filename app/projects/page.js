"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  { title: "Project 1", slug: "project-1", image: "/images/project-1.jpg" },
  { title: "Project 2", slug: "project-2", image: "/images/project-2.jpg" },
  { title: "Project 3", slug: "project-3", image: "/images/project-3.jpg" },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <Link
              href={`/projects/${project.slug}`}
              className="text-blue-400 hover:text-blue-500 font-medium"
            >
              View Details →
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
