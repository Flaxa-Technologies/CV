"use client";

import { motion } from "framer-motion";
import { Send, Terminal } from "lucide-react";

export function Contact() {
  return (
    <>
      <section
        className="py-24 px-4 sm:px-6 lg:px-8 bg-background-dark relative overflow-hidden"
        id="contact"
      >
        <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-surface-dark to-transparent opacity-50 pointer-events-none"></div>
        <div className="max-w-xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Let&apos;s Build Together
            </h2>
            <p className="text-slate-400">
              Have a project in mind or just want to discuss platforms? Drop a
              message.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 bg-surface-dark p-8 rounded-2xl border border-border-dark shadow-2xl"
          >
            <div>
              <label
                className="block text-sm font-medium text-slate-300 mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                id="name"
                placeholder="John Doe"
                type="text"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-slate-300 mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                id="message"
                placeholder="Tell me about your idea..."
                rows={4}
              ></textarea>
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:me@prasadnaik.in"
              className="w-full bg-primary text-background-dark font-bold py-4 rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(13,242,13,0.2)] hover:shadow-[0_0_25px_rgba(13,242,13,0.4)] flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="w-5 h-5" />
            </motion.a>
          </motion.form>
        </div>
      </section>

      <footer className="py-8 bg-surface-dark border-t border-border-dark text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Terminal className="text-primary w-6 h-6" />
          <span className="text-white font-bold">PRASAD NAIK</span>
        </div>
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Prasad Naik. All rights reserved.
        </p>
      </footer>
    </>
  );
}