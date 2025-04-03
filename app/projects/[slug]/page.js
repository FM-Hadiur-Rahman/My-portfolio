"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = {
  "project-1": {
    title: "Project 1",
    description: "This is a cool project about XYZ.",
    image: "/images/project-1.jpg",
  },
  "project-2": {
    title: "Project 2",
    description: "Another awesome project description.",
    image: "/images/project-2.jpg",
  },
  "project-3": {
    title: "Project 3",
    description: "A fantastic web app I built.",
    image: "/images/project-3.jpg",
  },
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-gray-900">
        <h1 className="text-3xl">Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {project.title}
      </motion.h1>

      <motion.div
        className="w-full max-w-3xl rounded-lg overflow-hidden shadow-lg mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={500}
        />
      </motion.div>

      <p className="text-lg text-gray-300 text-center max-w-2xl mb-6">
        {project.description}
      </p>

      <Link href="/projects">
        <motion.button
          className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Back to Projects
        </motion.button>
      </Link>
    </div>
  );
}
