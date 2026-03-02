"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, CreditCard, Lock, Package } from "lucide-react";

const SCENE_DURATIONS = [
  { id: 1, duration: 4000 },  // 0-4s: Logo + "Now Live"
  { id: 2, duration: 4000 },  // 4-8s: "Buy & Sell Digital Products"
  { id: 3, duration: 6000 },  // 8-14s: Features
  { id: 4, duration: 6000 },  // 14-20s: "Built for Creators. Built for Speed."
  { id: 5, duration: 5000 },  // 20-25s: Call to action
];

const TOTAL_DURATION = SCENE_DURATIONS.reduce((acc, scene) => acc + scene.duration, 0);

export default function Home() {
  const [currentScene, setCurrentScene] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const startTime = Date.now();
    let animationFrameId: number;

    const animate = () => {
      const now = Date.now();
      const elapsed = (now - startTime) % TOTAL_DURATION;
      setProgress((elapsed / TOTAL_DURATION) * 100);

      let accumulatedTime = 0;
      let activeScene = 1;

      for (const scene of SCENE_DURATIONS) {
        accumulatedTime += scene.duration;
        if (elapsed < accumulatedTime) {
          activeScene = scene.id;
          break;
        }
      }

      setCurrentScene(activeScene);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      {/* Animated Background Particles */}
      {isMounted && (
        <div className="absolute inset-0 z-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: Math.random() * 0.5 + 0.3,
              }}
              animate={{
                y: [null, Math.random() * -500],
                opacity: [null, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 h-1 z-50 bg-white/20 w-full">
         <motion.div
            className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            style={{ width: `${progress}%` }}
         />
      </div>

      <div className="z-10 flex w-full max-w-md flex-col items-center justify-center px-6 text-center">
        <AnimatePresence mode="wait">
          {/* Scene 1: Logo & Now Live (0-4s) */}
          {currentScene === 1 && (
            <motion.div
              key="scene1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <motion.img
                src="https://filemart.in/logo.png"
                alt="Filemart Logo"
                className="mb-6 h-24 w-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                animate={{
                  filter: ["drop-shadow(0px 0px 10px rgba(255,255,255,0.2))", "drop-shadow(0px 0px 25px rgba(255,255,255,0.6))", "drop-shadow(0px 0px 10px rgba(255,255,255,0.2))"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.h1
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Filemart is Now Live 🚀
              </motion.h1>
            </motion.div>
          )}

          {/* Scene 2: Buy & Sell (4-8s) */}
          {currentScene === 2 && (
            <motion.div
              key="scene2"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <h2 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                Buy & Sell<br />Digital Products
              </h2>
            </motion.div>
          )}

          {/* Scene 3: Features (8-14s) */}
          {currentScene === 3 && (
            <motion.div
              key="scene3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: -50 }}
              className="flex w-full flex-col gap-6 text-left"
            >
              {[
                { icon: Zap, text: "Instant Access", color: "text-yellow-400" },
                { icon: CreditCard, text: "Smooth Payments", color: "text-green-400" },
                { icon: Lock, text: "Secure Downloads", color: "text-blue-400" },
                { icon: Package, text: "Easy Product Management", color: "text-purple-400" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: index * 0.4, duration: 0.6, type: "spring" }}
                  className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm border border-white/5 shadow-lg"
                >
                  <div className={`rounded-full bg-white/10 p-3 ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <span className="text-lg font-semibold sm:text-xl">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Scene 4: Built for Creators (14-20s) */}
          {currentScene === 4 && (
            <motion.div
              key="scene4"
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-5xl font-black uppercase leading-none tracking-tighter sm:text-6xl lg:text-7xl">
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Built for
                </motion.span>
                <motion.span
                  className="block text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Creators.
                </motion.span>
                <motion.span
                  className="block mt-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  Built for Speed.
                </motion.span>
              </h2>
            </motion.div>
          )}

          {/* Scene 5: CTA (20-25s) */}
          {currentScene === 5 && (
            <motion.div
              key="scene5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center gap-8"
            >
              <h2 className="text-4xl font-bold sm:text-5xl">Start Selling Today</h2>
              <motion.div
                animate={{
                  boxShadow: [
                    "0px 0px 0px 0px rgba(255,255,255,0.1)",
                    "0px 0px 30px 10px rgba(255,255,255,0.3)",
                    "0px 0px 0px 0px rgba(255,255,255,0.1)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="rounded-full"
              >
                <button className="rounded-full bg-white px-8 py-4 text-xl font-bold text-gray-900 transition-transform hover:scale-105">
                  Filemart.in
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
