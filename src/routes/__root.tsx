import React, { useState, useEffect, useRef } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import BackToTop from "@/components/Buttons/BackToTop";
import FooterCTA from "@/components/CTA/FooterCTA";
import { Analytics } from "@vercel/analytics/react"


const RootLayout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const backToTopButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = ["home","why-us","services","projects","clients","stats","testimonials","faq","contact"];
    const headerHeight = document.querySelector("header")?.offsetHeight || 80;
    const handleScroll = () => {
      const scrollPosition = window.scrollY + headerHeight + 50;
      let currentSection = activeSection;
      let foundSection = false;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== section) currentSection = section;
            foundSection = true;
            break;
          }
        }
      }
      if (!foundSection) {
        if (window.scrollY < window.innerHeight / 3) {
          if (activeSection !== "home") currentSection = "home";
        } else {
          const lastSectionElement = document.getElementById(sections[sections.length - 1]);
          if (lastSectionElement && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 150) {
            if (activeSection !== sections[sections.length - 1])
              currentSection = sections[sections.length - 1];
          }
        }
      }
      if (activeSection !== currentSection) {
        setActiveSection(currentSection);
      }
      if (backToTopButtonRef.current) {
        const shouldShow = window.scrollY > window.innerHeight * 0.3;
        backToTopButtonRef.current.style.opacity = shouldShow ? "1" : "0";
        backToTopButtonRef.current.style.transform = shouldShow ? "scale(1)" : "scale(0.5)";
        backToTopButtonRef.current.style.pointerEvents = shouldShow ? "auto" : "none";
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

    // --- Animation Variants ---
    const fadeInUp = {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    };
    const staggerContainer = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
      },
    };


  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 ">
      <a id="top" tabIndex={-1} className="sr-only">Top of Page</a>
      <Navbar
        smoothScrollTo={smoothScrollTo}
        activeSection={activeSection}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      <main className="flex-1">
        <Outlet />
      </main>
      <FooterCTA
        staggerContainer={staggerContainer}
        fadeInUp={fadeInUp}
        smoothScrollTo={smoothScrollTo}
      />
      <Footer />
      <BackToTop backToTopButtonRef={backToTopButtonRef} />
      <Analytics />
    </div>
  );
};

export const Route = createRootRoute({
  component: () => (
    <>
      <RootLayout />
      <TanStackRouterDevtools />
    </>
  ),
});

export default RootLayout;
