
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

function FooterCTA({  staggerContainer, fadeInUp, smoothScrollTo }: { staggerContainer: {}, fadeInUp: {}, smoothScrollTo: (id: string) => void }) {
  return (
    <section className="py-20 lg:py-24 bg-navy text-ecru">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}
                  className="max-w-4xl mx-auto text-center">
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-ecru">
            Ready to Transform Your Business?
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-xl opacity-80 mb-10 text-ecru/80">
          Partner with Koket Investment and experience the difference our innovative solutions and dedication can make.
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
           {/* Get Started Button: Gold background, Navy text
          <Button size="lg" className="bg-gold hover:bg-gold/90 text-navy px-10 py-4 text-lg shadow-lg" onClick={() => smoothScrollTo('contact')}>
            Get Started Today
          </Button> */}
          {/* Schedule Button: Gold outline/text */}
          <Button variant="outline" size="lg" className="text-gold bg-chetwode hover:bg-gold hover:text-navy  px-10 py-4 text-lg transition-colors duration-300 " onClick={() => smoothScrollTo('contact')}>
            Schedule Consultation
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
  )
}

export default FooterCTA
