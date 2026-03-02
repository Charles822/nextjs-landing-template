"use client";

import { motion } from "motion/react";

interface SectionRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function SectionReveal({
  children,
  delay = 0,
  className = "",
}: SectionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
