"use client";

import { motion } from "framer-motion";

export function Vision() {
  return (
    <div className="grid md:grid-cols-2 bg-background-dark">
      <section
        className="py-20 px-4 sm:px-6 lg:px-12 border-b md:border-b-0 md:border-r border-border-dark flex flex-col justify-center"
        id="vision"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-lg mx-auto md:mx-0"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
            Future Outlook
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            The Vision
          </h2>
          <div className="space-y-8">
            {[
              {
                id: 1,
                title: "Technical Mastery",
                desc: "To bridge the gap between idea and execution, I am committed to learning full-stack development, ensuring I can build what I dream.",
              },
              {
                id: 2,
                title: "Grow Flaxa",
                desc: "Transforming Flaxa Technologies from a concept into a registered entity that solves real-world problems through software.",
              },
              {
                id: 3,
                title: "Creator Tools",
                desc: "Empowering the creator economy by building accessible tools like Radlus and Filemart.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-4 group"
              >
                <div className="mt-1">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-bold group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
                    {item.id}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-surface-dark/20 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-lg mx-auto md:mx-0 w-full"
        >
          <h2 className="text-2xl font-bold text-white mb-8">My Journey</h2>
          <div className="relative border-l border-border-dark ml-3 space-y-12">
            {[
              {
                year: "2025 - Present",
                title: "Civil Engineering Student",
                desc: "Started formal education in Civil Engineering, laying the groundwork for systematic thinking and infrastructure planning.",
              },
              {
                year: "2023",
                title: "Completed 10th Grade",
                desc: "Finished secondary education with a strong focus on mathematics and science.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 group"
              >
                <span className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-border-dark group-hover:bg-primary transition-colors"></span>
                <span className="text-sm font-mono text-primary mb-1 block">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-slate-400 text-sm mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
