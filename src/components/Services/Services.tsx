import { motion } from 'framer-motion'
import { servicesData } from '@/utils/constant'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

function Services({staggerContainer, fadeInUp, scaleUp}: {staggerContainer: {}, fadeInUp: {}, scaleUp: {}}) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-card">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-16">
        <motion.div variants={fadeInUp}
          className="inline-block px-4 py-1 rounded-full bg-chetwode text-white dark:text-white text-sm font-medium mb-4 shadow-sm">
          Our Expertise
        </motion.div>
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
          Comprehensive Solutions
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-lg text-card-foreground/80">
          Driving growth through innovation across key sectors.
        </motion.p>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <motion.div key={index} variants={scaleUp}
            // Use background for cards within the card section
            className="bg-background border border-border rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="mb-5 text-gold"> {/* Increased margin */}
              <service.icon className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
            <p className="text-foreground/80 mb-6 flex-grow text-sm">{service.description}</p>
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm"> {/* Center items */}
                  <Check className="h-4 w-4 text-gold mr-2 shrink-0" />
                  <span className="text-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant="link" className="mt-auto text-gold hover:text-gold/80 p-0 self-start no-underline hover:no-underline font-medium">
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
  )
}

export default Services
