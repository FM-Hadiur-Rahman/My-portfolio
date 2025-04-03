"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-800 text-white py-4 px-6 fixed top-0 left-0 right-0 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image src="/logo1.png" alt="Logo" width={40} height={40} />
            <span className="text-xl font-semibold">MyPortfolio</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-400">
            About
          </Link>
          <Link href="/projects" className="hover:text-blue-400">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-blue-400">
            Contact
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="hover:text-blue-400 font-semibold border border-blue-500 px-2 rounded"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
