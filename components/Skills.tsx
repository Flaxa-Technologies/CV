"use client";

import { motion } from "framer-motion";
import { Brain, Network, Lightbulb, TrendingUp, Hammer, Building } from "lucide-react";

const skills = [
  { icon: Brain, label: "Logical Thinking" },
  { icon: Network, label: "System Planning" },
  { icon: Lightbulb, label: "Entrepreneurial Mindset" },
  { icon: TrendingUp, label: "Platform Strategy" },
  { icon: Hammer, label: "Problem Solving" },
  { icon: Building, label: "Civil Fundamentals" },
];

export function Skills() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 border-y border-border-dark bg-surface-dark/20"
      id="skills"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-4"
          >
            Core Competencies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400"
          >
            Focusing on fundamentals over fleeting tools.
          </motion.p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(13, 242, 13, 0.5)" }}
              className="flex flex-col items-center justify-center p-6 bg-surface-dark rounded-lg border border-border-dark hover:border-primary/30 transition-colors gap-3 cursor-default"
            >
              <skill.icon className="text-primary w-8 h-8" />
              <span className="text-sm font-bold text-center text-slate-200">
                {skill.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
