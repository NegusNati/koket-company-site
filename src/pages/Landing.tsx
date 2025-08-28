import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// import { Link } from "@tanstack/react-router"; // Using <a> for simplicity
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// Assuming you have an Accordion component (like from Shadcn UI
import CountUp from "react-countup";

import {
  statsData,
  socialLinks,
  contactInfo,
} from "@/utils/constant";

import Hero from "@/components/HeroSection/Hero";
import WhyUs from "@/components/Reasons/WhyUs";
import Services from "@/components/Services/Services";
import ProjectsSection from "@/components/Projects/ProjectsSection";
import ClientLogos from "@/components/Projects/ClientLogos";
import FAQ from "@/components/FAQ/FAQ";

// Component uses semantic colors (bg-background, text-foreground) via @theme
// and brand colors (text-navy, bg-gold) for specific branding.

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState("home");

  const backToTopButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = [
      "home",
      "why-us",
      "services",
      "projects",
      "clients",
      "stats",
      "testimonials",
      "faq",
      "contact",
    ]; // Added new sections
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
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (activeSection !== section) currentSection = section;
            foundSection = true;
            break;
          }
        }
      }
      // Handle edge cases (very top or bottom)
      if (!foundSection) {
        if (window.scrollY < window.innerHeight / 3) {
          if (activeSection !== "home") currentSection = "home";
        } else {
          const lastSectionElement = document.getElementById(
            sections[sections.length - 1]
          );
          if (
            lastSectionElement &&
            window.scrollY + window.innerHeight >=
              document.documentElement.scrollHeight - 150
          ) {
            if (activeSection !== sections[sections.length - 1])
              currentSection = sections[sections.length - 1];
          }
        }
      }

      if (activeSection !== currentSection) {
        setActiveSection(currentSection);
      }

      // Back-to-top button visibility
      if (backToTopButtonRef.current) {
        const shouldShow = window.scrollY > window.innerHeight * 0.3;
        backToTopButtonRef.current.style.opacity = shouldShow ? "1" : "0";
        backToTopButtonRef.current.style.transform = shouldShow
          ? "scale(1)"
          : "scale(0.5)";
        backToTopButtonRef.current.style.pointerEvents = shouldShow
          ? "auto"
          : "none";
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

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
  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // --- Helper Functions ---
  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-gold selection:text-navy">
      <section>
        <Hero
          smoothScrollTo={smoothScrollTo}
          staggerContainer={staggerContainer}
          fadeInUp={fadeInUp}
        />

        {/* --- Why Choose Us Section --- */}
        <WhyUs staggerContainer={staggerContainer} fadeInUp={fadeInUp} />

        {/* --- Services Section --- */}
        <Services
          staggerContainer={staggerContainer}
          fadeInUp={fadeInUp}
          scaleUp={scaleUp}
        />

        {/* --- Projects Section --- */}
        <ProjectsSection
          staggerContainer={staggerContainer}
          fadeInUp={fadeInUp}
        />

        {/* --- Client Logos Section --- */}
        <ClientLogos />

        {/* --- Stats Section --- */}
        <section id="stats" className="py-20 lg:py-24 bg-gold text-navy">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {statsData.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 flex justify-center items-baseline text-navy">
                    <CountUp
                      end={stat.value}
                      duration={3}
                      enableScrollSpy
                      scrollSpyOnce
                      redraw={true}
                    />
                    <span className="text-3xl md:text-4xl ml-1">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="opacity-80 text-sm md:text-base font-medium text-navy">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

    


        {/* --- FAQ Section --- */}
        <FAQ staggerContainer={staggerContainer} fadeInUp={fadeInUp}></FAQ>

        {/* --- Contact Section --- */}
        <section id="contact" className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              {/* Contact Info Side */}
              <motion.div variants={fadeInUp} className="space-y-8">
                <div>
                  <div className="inline-block px-4 py-1 rounded-full bg-chetwode text-white dark:text-white text-sm font-medium mb-4 shadow-sm">
                    Get In Touch
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Let's Start a Conversation
                  </h2>
                  <p className="text-lg text-foreground/80 mt-4 max-w-xl">
                    Have a project in mind or want to learn more about our
                    services? Reach out, and let's discuss how we can help you
                    succeed.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  {contactInfo.map((info) => (
                    <div key={info.text} className="flex items-center">
                      {/* Icon: Gold */}
                      <div className="flex-shrink-0 bg-gold/10 rounded-full p-3 mr-4">
                        <info.icon
                          className="w-5 h-5 text-gold"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        {/* Text: Foreground */}
                        <p className="text-base text-foreground">{info.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground mb-3">
                    Follow Us
                  </p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow us on ${social.name}`}
                        // Use foreground tint for bg, hover gold
                        className="inline-flex items-center justify-center bg-foreground/5 hover:bg-gold text-foreground/70 hover:text-navy p-3 rounded-full transition-colors duration-300"
                      >
                        <social.Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form Side */}
              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                // Use card for form background
                className="bg-card rounded-xl p-8 lg:p-10 shadow-xl border border-border"
              >
                <h3 className="text-2xl font-bold text-card-foreground mb-6">
                  Send us a message
                </h3>
                {/* Form uses Shadcn components - should style correctly now */}
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-card-foreground mb-1.5"
                      >
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-card-foreground mb-1.5"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-card-foreground mb-1.5"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-card-foreground mb-1.5"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold/90 text-navy py-3 text-base"
                  >
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </section>
    </div>
  );
}
