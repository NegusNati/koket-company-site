import { motion, AnimatePresence } from 'framer-motion'
import  { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { heroImages } from '@/utils/constant'


function Hero({
  smoothScrollTo,
  staggerContainer,
  fadeInUp,
}: {
  smoothScrollTo: (id: string) => void
  staggerContainer: {}
  fadeInUp: {}
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  const currentImage = heroImages[currentIndex]

  return (
    <section
      id="home"
      className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-background to-card dark:from-background dark:to-navy/10"
    >
      <div className="absolute inset-0 opacity-5 dark:opacity-[0.02]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-chetwode rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6 text-center lg:text-left"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-block px-4 py-1 rounded-full bg-chetwode text-white dark:text-white text-sm font-medium shadow-sm"
            >
              Established in 2021 E.C.
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight"
            >
              Building Ethiopia's Future:{" "}
              <span className="text-gold">Innovative</span> Solutions
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto lg:mx-0"
            >
              Koket Investment delivers excellence in Design & Build, Digital
              Solutions, and Trading with a steadfast commitment to quality and
              client success.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start font-extrabold"
            >
              <Button
                size="lg"
                className="bg-gold hover:bg-gold/90 text-navy px-8 py-3 text-lg shadow hover:shadow-md transition-all hover:font-extrabold"
                onClick={() => smoothScrollTo("services")}
              >
                Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg border-foreground/30 hover:bg-foreground/5 dark:border-border  hover:font-extrabold"
                onClick={() => smoothScrollTo("contact")}
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated Hero Image */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="relative bg-card rounded-xl overflow-hidden shadow-xl  aspect-video"
              >
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-gold via-cantaloupe to-chetwode opacity-20 blur-xl"></div>
                <img
                  src={currentImage.src}
                  alt={currentImage.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-lg font-semibold">{currentImage.title}</h3>
                  <p className="text-sm opacity-80">{currentImage.description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
