import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import companyLogo from "@assets/generated_images/Construction_company_logo_design_336a5c92.png";

interface EntryAnimationProps {
  onComplete: () => void;
}

export function EntryAnimation({ onComplete }: EntryAnimationProps) {
  const [stage, setStage] = useState<"doors" | "logo" | "logo-exit" | "tagline" | "complete">("doors");

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage("logo"), 1200),
      setTimeout(() => setStage("logo-exit"), 3200),
      setTimeout(() => setStage("tagline"), 4000),
      setTimeout(() => {
        setStage("complete");
        onComplete();
      }, 6500)
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" data-testid="entry-animation">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="absolute left-0 top-0 h-full w-1/2 bg-white"
        style={{ zIndex: 100 }}
        data-testid="door-left"
      />
      
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="absolute right-0 top-0 h-full w-1/2 bg-white"
        style={{ zIndex: 100 }}
        data-testid="door-right"
      />

      <div className="absolute inset-0 bg-primary flex items-center justify-center">
        <div className="relative">
          {(stage === "logo" || stage === "logo-exit") && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                stage === "logo-exit"
                  ? { opacity: 0, y: -100, scale: 0.9 }
                  : { opacity: 1, scale: 1 }
              }
              transition={
                stage === "logo-exit"
                  ? { duration: 0.8 }
                  : { duration: 0.8 }
              }
              className="flex flex-col items-center"
              data-testid="logo-animation"
            >
              <img
                src={companyLogo}
                alt="Vidhmahee Construction"
                className="w-48 h-48 object-contain"
              />
            </motion.div>
          )}

          {stage === "tagline" && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center px-6"
              data-testid="tagline-animation"
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Building Dreams with
              </motion.h1>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Strength & Precision
              </motion.h1>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
