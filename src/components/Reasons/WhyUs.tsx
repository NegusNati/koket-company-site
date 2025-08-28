import { whyUsFeatures } from '@/utils/constant'
import { motion } from 'framer-motion'

function WhyUs({staggerContainer, fadeInUp}: {staggerContainer: {}, fadeInUp: {}}) {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Partner with <span className="text-gold">Koket</span> Investment?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-foreground/80">
                We combine local expertise with global standards to deliver exceptional value and results for our clients.
            </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUsFeatures.map((feature, index) => (
                <motion.div key={index} variants={fadeInUp}
                            className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                    <div className="mb-4 bg-gold/10 rounded-full p-4 text-gold">
                        <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">{feature.title}</h3>
                    <p className="text-card-foreground/80 text-sm flex-grow">{feature.description}</p>
                </motion.div>
            ))}
        </motion.div>
    </div>
</section>
  )
}

export default WhyUs
