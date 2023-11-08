import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const ReverseReveal = ({ children, width = "fit-content" }) => {
  const mainControls = useAnimation();
  const containerRef = useRef();

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY < window.innerHeight / 2 || !containerRef.current) {
        // Si el scroll está antes de la mitad de la ventana o el contenedor no está disponible, muestra el contenido
        mainControls.start("visible");
      } else {
        // De lo contrario, oculta el contenido
        mainControls.start("hidden");
      }
    };

    // Agregar el listener del scroll cuando el componente está montado
    window.addEventListener("scroll", scrollListener);

    // Inicializar la animación cuando el componente se monta
    mainControls.start("visible");

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [mainControls]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width,
        overflow: "hidden",
        margin: "auto",
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -75 },
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
