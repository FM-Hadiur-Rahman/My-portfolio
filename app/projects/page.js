"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// export const metadata = {
//   title: "BanglaBnB – Project Overview | Your Name",
//   description:
//     "A full-stack vacation rental app for Bangladesh built using Next.js, Supabase, and Tailwind.",
// };

const projects = [
  {
    title: "BanglaBnB – Airbnb for Bangladesh",
    slug: "banglabnb",
    image: "/images/banglabnb.jpg", // make sure to add this image in /public/images/
  },

  {
    title: "BD-Tours – Tour Booking App",
    slug: "bd-tours",
    image: "/images/bd-tours.jpg",
  },
  {
    title: "Log Cabin Reservation",
    slug: "log-cabin",
    image: "/images/log-cabin.jpg",
  },
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
