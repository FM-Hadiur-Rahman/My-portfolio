"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// You can move this to a separate file later (e.g., lib/projects.js)
const projects = {
  banglabnb: {
    title: "banglabnb",
    description:
      "A full-stack platform for booking accommodations across Bangladesh. It features user registration, listing management for hosts, and map-based search functionality.",
    image: "/images/banglabnb.jpg",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://banglabnb.com/",
    code: "https://github.com/FM-Hadiur-Rahman/banglabnb",
  },
  "bd-tours": {
    title: "bd-tours",
    description:
      "A dynamic tour booking frontend built with Next.js and Tailwind CSS, seamlessly integrated with the Natours API. Users can browse, view, and manage tour packages with modern UI, interactive maps, and authentication support.",
    image: "/images/bd-tours.jpg",
    tech: ["Next.js", "Tailwind CSS", "Context API", "Render API"],
    live: "https://bd-tours-f-m-hadiur-rahmans-projects.vercel.app/", // Replace with your actual URL
    code: "https://github.com/FM-Hadiur-Rahman/bd-tours",
  },
  "log-cabin": {
    title: "log-cabin",
    description:
      "A fantastic web app I built for booking tours with maps and secure payments.",
    image: "/images/project-3.jpg",
    tech: ["Express", "Stripe", "Mapbox"],
    live: "https://example.com/project-3",
    code: "https://github.com/yourusername/project-3",
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
        className="text-4xl font-bold mb-4 text-center"
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
          className="object-cover w-full h-auto"
        />
      </motion.div>

      <p className="text-lg text-gray-300 text-center max-w-2xl mb-6">
        {project.description}
      </p>

      {project.tech && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-center">
            Tech Stack:
          </h2>
          <ul className="flex flex-wrap justify-center gap-2 text-sm text-gray-400">
            {project.tech.map((tech, index) => (
              <li
                key={index}
                className="bg-gray-800 px-3 py-1 rounded border border-gray-700"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex gap-4 mb-8">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            🔗 Live Demo
          </a>
        )}
        {project.code && (
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            💻 Source Code
          </a>
        )}
      </div>

      <Link href="/projects">
        <motion.button
          className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ← Back to Projects
        </motion.button>
      </Link>
    </div>
  );
}
