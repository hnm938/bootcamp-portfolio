import { motion } from "framer-motion";

import TextAnime from "./TextAnime";

export default function TextMessage({ children, className, duration=0.5, delay, textSpeed=2 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        duration: duration,
        delay: delay,
      }}
      className={`message ${className}`}
    >
      <TextAnime duration={textSpeed} text={children} delay={delay} />
      <p>Delivered</p>
    </motion.div>
  );
}