"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]"
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Open to Opportunities
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-slate-900 dark:text-white"
        >
          PRASAD NAIK
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400 max-w-2xl"
        >
          Techy <span className="text-primary">•</span>{" "}
          Platform Thinker <span className="text-primary">•</span> System
          Builder
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          Aspiring to bridge the gap between civil engineering logic and digital
          ecosystems. I build platforms, launch ideas, and turn concepts into real digital products.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-4"
        >
          <a
            className="flex items-center justify-center px-8 py-3 bg-primary text-background-dark text-base font-bold rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(13,242,13,0.3)] hover:shadow-[0_0_30px_rgba(13,242,13,0.5)]"
            href="#vision"
          >
            View My Vision
          </a>
          <a
            className="flex items-center justify-center px-8 py-3 bg-surface-dark border border-border-dark text-white text-base font-bold rounded-lg hover:bg-border-dark/50 transition-colors"
            href="#contact"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
