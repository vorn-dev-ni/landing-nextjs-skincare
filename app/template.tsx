"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function Template({ children }: { children: ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathName}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // exit={{
        //   opacity: 0,
        // }}
        transition={{ duration: 0.7, ease: "easeIn" }}
      >
        <div key={pathName}>{children}</div>
      </motion.div>
    </AnimatePresence>
  );
}
