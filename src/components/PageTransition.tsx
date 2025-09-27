"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="relative min-h-screen">
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="fixed inset-0 bg-gradient-to-br from-black to-blue-950 z-50 pointer-events-none"
        />

        {/* Page Content */}
        <div className="relative z-10">{children}</div>
      </motion.div>
    </AnimatePresence>
  );
}
