"use client";

import { useState } from "react";
import { Terminal, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Platforms", href: "#platforms" },
  { name: "Skills", href: "#skills" },
  { name: "Vision", href: "#vision" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Terminal className="text-primary w-8 h-8" />
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              PRASAD NAIK
            </h2>
          </div>
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <a
            className="hidden md:flex items-center justify-center px-4 py-2 bg-primary text-background-dark text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors"
            href="#contact"
          >
            Contact Me
          </a>
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </header>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background-dark border-b border-border-dark"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-white hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="flex items-center justify-center px-4 py-2 bg-primary text-background-dark text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
