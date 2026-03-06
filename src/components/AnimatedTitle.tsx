import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTitleProps {
  children: ReactNode;
}

export default function AnimatedTitle({ children }: AnimatedTitleProps) {

  return (

    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="section-title"
    >
      {children}
    </motion.h2>

  );

}