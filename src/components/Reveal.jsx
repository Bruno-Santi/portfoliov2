import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const Reveal = ({ children, width = "fit-content" }) => {
  const mainControls = useAnimation();

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > window.innerHeight / 2) {
        mainControls.start("visible");
      } else {
        mainControls.start("hidden");
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [mainControls]);

  return (
    <div
      style={{
        position: "relative",
        width,
        overflow: "hidden",
        margin: "auto",
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 90 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
