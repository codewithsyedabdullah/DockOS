import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PowerScreen({ goNext, autoBoot = false }) {
  const [bootStarted, setBootStarted] = useState(autoBoot);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const enterFullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  };

  const startBoot = () => {
    enterFullscreen();
    setBootStarted(true);
  };

  useEffect(() => {
    if (!bootStarted) return;

    // Simulate boot loading
    const duration = 3000; // 3 seconds total
    const interval = 30; // Update every 30ms
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment + (Math.random() * 2 - 1); // Add slight randomness
        if (next >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [bootStarted]);

  useEffect(() => {
    if (isComplete) {
      // Small delay before transitioning
      const timeout = setTimeout(() => {
        goNext();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isComplete, goNext]);

  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-black relative"
      style={{ backgroundImage: !bootStarted ? "url('/icons/hello.png')" : "none" }}
    >
      <AnimatePresence mode="wait">
        {!bootStarted ? (
          <motion.div
            key="power-off"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center gap-6 z-10 absolute bottom-32"
          >
            {/* Power Button */}
            <motion.button
              onClick={startBoot}
              className="w-12 h-12 bg-black/5 hover:bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center transition-colors duration-200 border border-white/20 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white font-semibold text-xs mt-0 px-4 py-1.5 bg-black/1 backdrop-blur-md rounded-full border border-white/10 shadow-md tracking-wide"
            >
              Boot DockOS
            </motion.p>
          </motion.div>
        ) : !isComplete && (
          <motion.div
            key="boot-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.5, ease: "easeOut" }
            }}
            className="flex flex-col items-center justify-center gap-10 z-10"
          >
            {/* DockOS Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-16"
            >
              <svg
                viewBox="0 0 384 512"
                className="w-24 h-28 text-white"
                fill="currentColor"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
            </motion.div>

            {/* Progress Bar Container */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-48 h-1 bg-white/20 rounded-full overflow-hidden"
            >
              {/* Progress Bar Fill */}
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}