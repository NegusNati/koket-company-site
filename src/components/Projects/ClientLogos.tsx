import { motion } from 'framer-motion'
import { clientLogos } from '@/utils/constant'

const repeatCount = 4;
const duplicatedLogos = Array.from({ length: repeatCount }).flatMap(() => clientLogos);



const sliderVariants = {
  animate: {
    x: ['0%', '-100%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 30, // Adjust speed here
        ease: 'linear',
      },
    },
  },
};

function ClientLogos() {
  return (
    <section id="clients" className="py-16 bg-card overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-lg font-semibold text-card-foreground/60 mb-12 uppercase tracking-wider">
          Trusted By Leading Organizations
        </h3>

        <div
          className="relative w-full"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          }}
        >
          <motion.div
            className="flex whitespace-nowrap"
            variants={sliderVariants}
            animate="animate"
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 inline-block align-middle transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 lg:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ClientLogos
