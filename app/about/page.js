"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl text-center"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src="/profile.jpg"
            alt="F M Hadiur Rahman"
            width={160}
            height={160}
            className="rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg"
          />
        </motion.div>

        {/* Name & Title */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl font-extrabold text-blue-400"
        >
          F M Hadiur Rahman
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg text-gray-300 mb-6"
        >
          Full-Stack Engineer | React | Next.js | Node.js
        </motion.p>

        {/* Description with Smooth Animation */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gray-400 leading-relaxed"
        >
          {"I'm a passionate full-stack engineer specializing in "}
          <strong>React, Next.js, Node.js, and MongoDB</strong>
          {
            " and I build scalable, user-friendly, and high-performance applications to solve real-world challenges."
          }
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-gray-400 leading-relaxed mt-4"
        >
          My experience includes developing applications for **restaurant
          management, booking platforms, and real-time maps**. I continuously
          explore new technologies to enhance my skills.
        </motion.p>

        {/* Social Links with Hover Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-6 flex space-x-6 justify-center"
        >
          <a
            href="https://github.com/FM-Hadiur-Rahman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/f-m-hadiur-rahman/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            download="F_M_Hadiur_Rahman_Resume.pdf"
            className="hover:text-blue-400 transition-all duration-300"
          >
            Resume
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
