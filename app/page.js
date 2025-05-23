"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <div className="min-h-screen  bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {"Hi, I'm Rahman"}
      </motion.h1>
      <p className="text-lg text-gray-300 mb-6">
        Full-Stack Developer | React | Node.js | MongoDB
      </p>
      <div className="flex space-x-4">
        <Link href="/projects">
          <Button text="View Project" />
        </Link>
        <Link href="/contact">
          <Button text="Contact Me" />
        </Link>
      </div>
    </div>
  );
}
