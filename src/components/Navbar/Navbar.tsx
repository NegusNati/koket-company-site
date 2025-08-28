import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { navLinks } from "@/utils/constant";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { X, Menu } from "lucide-react";



function Navbar({ smoothScrollTo, activeSection, setIsMenuOpen, isMenuOpen }: { smoothScrollTo: (id: string) => void, activeSection: string, setIsMenuOpen: (isOpen: boolean) => void, isMenuOpen: boolean }) {
  return (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border transition-shadow duration-300 shadow-sm">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16 md:h-20">
      {/* Logo */}
      <a href="#home" className="flex items-center" onClick={(e) => { e.preventDefault(); smoothScrollTo('home'); }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-foreground flex gap-2">
         <img src="/logo_p.webp" alt="Koket Logo" width={32} height={32} />
        <p> <span className="text-gold">Koket</span>   <span className="text-navy">Investment</span></p>
        </motion.div>
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
        {navLinks.map((link) => (
          <motion.a
            key={link.id}
            href={`#${link.id}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "text-sm font-medium transition-colors duration-200 hover:text-gold",
              activeSection === link.id ? "text-gold" : "text-foreground/70",
            )}
            onClick={(e) => { e.preventDefault(); smoothScrollTo(link.id); }}
          >
            {link.title}
          </motion.a>
        ))}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          {/* Use brand colors directly for the main CTA button */}
          <Button onClick={() => smoothScrollTo('contact')} className="bg-gold hover:bg-gold/90 text-navy px-5 py-2">
            Get Started
          </Button>
        </motion.div>
      </nav>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden">
        <motion.button whileTap={{ scale: 0.9 }} onClick={() => setIsMenuOpen(!isMenuOpen)}
         className="p-2 rounded-md text-foreground/70 hover:text-gold focus:outline-none transition-colors" aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
    </div>
  </div>

  {/* Mobile Navigation Menu */}
  <AnimatePresence>
    {isMenuOpen && (
      <motion.div
        key="mobile-menu"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden bg-background border-b border-border absolute top-full left-0 right-0 shadow-lg" // Added positioning and shadow
      >
        <div className="container mx-auto px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); smoothScrollTo(link.id); setIsMenuOpen(false); }}
                className={cn("block py-2 text-base font-medium transition-colors hover:text-gold", activeSection === link.id ? "text-gold" : "text-foreground/80")}>
                {link.title}
              </a>
           ))}
          <Button onClick={() => { smoothScrollTo('contact'); setIsMenuOpen(false); }} className="w-full mt-4 bg-gold hover:bg-gold/90 text-navy">
             Get Started
           </Button>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</header>
);
}

export default Navbar;
