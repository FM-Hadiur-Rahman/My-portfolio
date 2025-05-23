"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // You can use any icon library

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo1.png" alt="Logo" width={40} height={40} />
          <span className="text-xl font-semibold">MyPortfolio</span>
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <NavLinks />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 flex flex-col bg-gray-800">
          <NavLinks toggleMenu={toggleMenu} />
        </div>
      )}
    </nav>
  );
}

function NavLinks({ toggleMenu }) {
  const linkClass = "hover:text-blue-400 text-lg";

  return (
    <>
      <Link href="/" className={linkClass} onClick={toggleMenu}>
        Home
      </Link>
      <Link href="/about" className={linkClass} onClick={toggleMenu}>
        About
      </Link>
      <Link href="/projects" className={linkClass} onClick={toggleMenu}>
        Projects
      </Link>
      <Link href="/contact" className={linkClass} onClick={toggleMenu}>
        Contact
      </Link>
      <Link
        href="/resume.pdf"
        target="_blank"
        className={`${linkClass} border border-blue-500 px-2 rounded font-semibold`}
        onClick={toggleMenu}
      >
        Resume
      </Link>
    </>
  );
}
