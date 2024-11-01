"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function FadeIn({ children, x, y, delay }: { x: number; y: number; delay: number; children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
    }
  }, [inView, isVisible]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: y, x: x },
        visible: { opacity: 1, y: 0, x: 0 }
      }}
      initial={"hidden"}
      animate={isVisible ? "visible" : "hidden"}
      transition={{ delay: delay }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
