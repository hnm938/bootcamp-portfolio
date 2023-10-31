import { useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect } from "react";

export default function TextAnime({ duration=4, text="", delay }) {
  const baseText = text;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, baseText.length, {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeInOut",
      });
      return controls.stop;
    }
  }, [isInView]);

  return (
    <span className="" ref={ref}>
      <motion.pre ref={ref}>{displayText}</motion.pre>
    </span>
  );
}
