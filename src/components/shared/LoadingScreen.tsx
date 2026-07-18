import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1000;

    let frame: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 220);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[rgb(var(--bg))]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-accent-400 to-accent-600 font-display text-2xl font-bold text-white"
          >
            AD
          </motion.div>

          <div className="mt-8 h-0.5 w-40 overflow-hidden rounded-full bg-[rgb(var(--bg-elevated))]">
            <motion.div
              className="h-full rounded-full bg-linear-to-r from-accent-400 to-accent-600"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-4 font-mono text-[11px] text-[rgb(var(--fg-muted))]">
            {Math.floor(progress)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
