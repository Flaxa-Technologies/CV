"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Gamepad2, ShoppingBag } from "lucide-react";

export function Platforms() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background-dark relative" id="platforms">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Platforms
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Digital ecosystems I am currently conceptualizing and building. These
            are not just websites; they are future businesses.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          {/* Parent Company: Flaxa */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl relative z-10 bg-surface-dark border-2 border-primary/20 rounded-2xl p-8 md:p-12 hover:border-primary/60 transition-all duration-300 shadow-[0_0_40px_rgba(13,242,13,0.05)]"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Box className="text-primary w-24 h-24" />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full border border-primary/20">
                  Parent Brand
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
                Flaxa Technologies
              </h3>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
                Flaxa Technologies is the parent digital brand under which I build
                scalable online platforms and ecosystems. It is the umbrella
                company.
              </p>
              <a
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-background-dark text-base font-bold rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(13,242,13,0.3)] hover:shadow-[0_0_30px_rgba(13,242,13,0.5)] group"
                href="https://flaxa.in"
                target="_blank"
                rel="noreferrer"
              >
                Visit Flaxa
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Connector Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-16 w-[2px] bg-gradient-to-b from-primary/50 to-primary mb-0 relative"
          >
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(13,242,13,0.8)]"></div>
          </motion.div>

          {/* Horizontal Connector for Desktop */}
          <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: "75%" }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.6 }}
             className="hidden md:block h-[2px] bg-primary/30 relative mb-8"
          >
            <div className="absolute left-0 top-0 h-4 w-[2px] bg-primary/30"></div>
            <div className="absolute right-0 top-0 h-4 w-[2px] bg-primary/30"></div>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl relative">
            <div className="md:hidden absolute top-[-32px] left-1/2 -translate-x-1/2 w-[2px] h-8 bg-primary/30"></div>
            
            {/* Radlus */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="group relative bg-surface-dark border border-border-dark rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                <Gamepad2 className="text-primary w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                Radlus
              </h3>
              <div className="h-[1px] w-12 bg-primary mb-4"></div>
              <p className="text-slate-400 text-sm mb-6 flex-grow">
                A product under Flaxa Technologies. A monetization platform for
                Minecraft server owners to sell ranks, kits, and in-game perks.
              </p>
              <div className="mt-auto">
                <a
                  className="inline-flex items-center text-primary text-sm font-bold hover:underline underline-offset-4 decoration-primary decoration-2 group-hover:text-white transition-colors"
                  href="https://radlus.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Radlus
                  <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Filemart */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="group relative bg-surface-dark border border-border-dark rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                <ShoppingBag className="text-primary w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                Filemart
              </h3>
              <div className="h-[1px] w-12 bg-primary mb-4"></div>
              <p className="text-slate-400 text-sm mb-6 flex-grow">
                A product under Flaxa Technologies. A digital marketplace
                platform for creators to sell files, scripts, and downloadable
                digital products.
              </p>
              <div className="mt-auto">
                <a
                  className="inline-flex items-center text-primary text-sm font-bold hover:underline underline-offset-4 decoration-primary decoration-2 group-hover:text-white transition-colors"
                  href="https://filemart.in"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Filemart
                  <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
