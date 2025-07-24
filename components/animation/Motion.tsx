"use client";
import {
  motion,
  TargetAndTransition,
  Transition,
  VariantLabels,
} from "motion/react";

const Motion = ({
  children,
  className,
  initial,
  animate,
  transition,
  whileHovering,
}: {
  children?: React.ReactNode;
  className?: string;
  initial?: TargetAndTransition | VariantLabels | boolean;
  animate?: TargetAndTransition | VariantLabels | boolean;

  transition?: Transition;
  whileHovering?: VariantLabels | TargetAndTransition;
}) => {
  return (
    <motion.div
      transition={transition}
      initial={initial}
      animate={animate}
      whileHover={whileHovering}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
