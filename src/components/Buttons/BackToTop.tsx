import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

function BackToTop({
  backToTopButtonRef,
}: {
  backToTopButtonRef: React.RefObject<HTMLButtonElement | null>;
}) {
  return (
    <motion.button
      ref={backToTopButtonRef}
      initial={{ opacity: 0, scale: 0.5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="fixed bottom-6 right-6 bg-gold text-navy p-3 rounded-full shadow-lg z-50 hover:bg-gold/90 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background pointer-events-none"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll back to top"
      style={{ opacity: 0, transform: "scale(0.5)" }}
    >
      <ChevronDown className="h-5 w-5 transform rotate-180" />
    </motion.button>
  );
}

export default BackToTop;
