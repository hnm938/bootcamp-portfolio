import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function AnimText({ duration=4, text="", delay }) {
  const baseText = text;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      delay: delay,
      duration: duration,
      ease: "easeInOut"
    });
    return controls.stop;
  }, []);

  return (
    <span className="">
      <motion.pre>{displayText}</motion.pre>
    </span>
  );
}
