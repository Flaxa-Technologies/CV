"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border-dark bg-surface-dark/30"
      id="about"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 aspect-square relative rounded-2xl overflow-hidden border border-border-dark"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-background-dark via-transparent to-primary/20 z-10"></div>
            <motion.img
              whileHover={{ scale: 1.05 }}
              alt="Abstract geometric structure representing engineering"
              className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVRvuV0HISMjvLTtXwRp2QbTDVZEYVSxUytZEy-QnK6gxtBprs0G3giNuKB_UkQWYXmD5WV8Fy_oCA_FpZet7Qv6P36ZX84BH-MCmBnefmWKgRocGkc-GwF-SvnH-b2c2etocX6BOWtT9IOxEapLfQE1pMAs2jro8pSLr-d9waG0NhvWN8QHbTi6A92Ii2xIJwBlj-iIwctPzrzA2PjbegXeeRokxcQnEuX7MwQXNrKBMB-T4-ixiGJk-e_g_-yCvHw_af_EQpPQao"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex flex-col gap-6"
          >
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
              <span className="w-8 h-[2px] bg-primary"></span>
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Engineering Student & Tech Enthusiast
            </h2>
            <p className="text-slate-400 leading-relaxed">
              I am a 1st-year Civil Engineering student with a hidden passion
              for digital ecosystems. While my academic focus is on physical
              infrastructure, my true ambition lies in building digital
              platforms and scalable systems.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I am currently exploring how to apply engineering logic—statics,
              dynamics, and structural analysis—to software entrepreneurship. I
              believe the principles of building a bridge are not so different
              from building a robust digital marketplace.
            </p>
            <div className="flex gap-4 pt-2">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">03</span>
                <span className="text-xs text-primary uppercase">
                  Current Projects
                </span>
              </div>
              <div className="w-[1px] h-full bg-border-dark"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">1st</span>
                <span className="text-xs text-primary uppercase">
                  Year Student
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
